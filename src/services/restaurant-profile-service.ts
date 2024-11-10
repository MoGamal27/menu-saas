import { Request } from 'express';
import { prismaClientManager } from '../../prisma/PrismaClientManager';
import { PrismaClient } from '@prisma/client';

export class RestaurantProfileService {
  private prisma!: PrismaClient;

  constructor() {}

  async init(request: Request) {
    this.prisma = await prismaClientManager.getClient(request);
  }

  async createRestaurantProfile(name: string, description: string, address: string) {
    if (!this.prisma) throw new Error("Prisma client not initialized. Call 'init' first.");

    const newRestaurantProfile = await this.prisma.restaurant_profile.create({
      data: {
        name,
        description,
        address,
      }
    });
    return newRestaurantProfile;
  }
}
