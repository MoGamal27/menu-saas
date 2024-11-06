import { PrismaClient, Prisma, User } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {
  async createUser(userData: Prisma.UserCreateInput): Promise<void> {
    await prisma.user.create({ data: userData });
  }

  async getAllUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }
}





