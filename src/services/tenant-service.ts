import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()

export class TenantService{
   async createTenant(name: string, subdomain: string) {
    const tenant = await prisma.tenant.create({
        data: { name, subdomain }
    });
     
    return tenant;
}
    
}