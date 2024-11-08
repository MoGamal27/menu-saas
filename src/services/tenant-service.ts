import { PrismaClient, Prisma, Tenant } from '@prisma/client';

const prisma = new PrismaClient();

export class TenantService{

    async createTenant(name: string, subdomain: string) {
        
        const newTenant = await prisma.tenant.create({
            data: {
                name,
                subdomain
            }
        })
        return newTenant;
    }

    async getAllTenants() {
        return await prisma.tenant.findMany();
    }

    async getTenantBySubdomain(subdomain: string) {
        return await prisma.tenant.findUnique({
            where: {
                subdomain
            }
        })
    }
    async getTenantById(id: number) {
        return await prisma.tenant.findUnique({
            where: {
                id
            }
        })
    }
    
}