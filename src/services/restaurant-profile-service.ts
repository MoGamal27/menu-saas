import { PrismaClient, Prisma } from '@prisma/client';
import { Request } from 'express';

const prisma = new PrismaClient();
export class RestaurantProfileService {
  constructor(private tenantPrisma: any) {}

  async createRestaurantProfile(
    name: string,
    description: string,
    address: string,
  ) {
    const newRestaurantProfile = await this.tenantPrisma.restaurantProfile.create({
      data: {
        name,
        description,
        address,
      }
    });
    return newRestaurantProfile;
  }

  getAllRestaurantProfiles() {
    return this.tenantPrisma.restaurantProfile.findMany();
  }
}
