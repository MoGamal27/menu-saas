import { PrismaClient, Prisma, User } from '@prisma/client';
import   bcrypt   from 'bcrypt';

const prisma = new PrismaClient();

export class UserService {
  async createUser(name: string, email: string, password: string, role: 'ADMIN' | 'USER' | 'TENANT'): Promise<User> {
 
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role
      }
    })
    return newUser;
  }

  async getAllUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }
}





