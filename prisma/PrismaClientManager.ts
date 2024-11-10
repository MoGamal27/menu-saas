import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import dotenv from 'dotenv';

dotenv.config()

class PrismaClientManager {
  private clients: { [key: string]: PrismaClient } = {};

  private getTenantId(request: Request): string {
    // Retrieves tenant ID from request headers or defaults to 'public'
    return request.headers['x-tenant-id'] as string || 'public';
  }

  private async initializeSchema(client: PrismaClient, tenantId: string) {
    // Initialize schema and set the search path for the tenant
    await client.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "${tenantId}"`);
    await client.$executeRawUnsafe(`SET search_path TO "${tenantId}"`);
  }

  async getClient(request: Request): Promise<PrismaClient> {
    const tenantId = this.getTenantId(request);
    let client = this.clients[tenantId];

    if (!client) {
      const databaseUrl = process.env.DATABASE_URL?.replace('public', tenantId) || '';

      client = new PrismaClient({
        datasources: {
          db: {
            url: databaseUrl,
          },
        },
      });

      await this.initializeSchema(client, tenantId);

      // Cache the initialized client for future use
      this.clients[tenantId] = client;
    }

    return client;
  }
}

export const prismaClientManager = new PrismaClientManager();

