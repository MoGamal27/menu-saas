import { getTenantPrisma } from '../../prisma/tenantPrisma';

declare global {
  namespace Express {
    interface Request {
      tenantPrisma: ReturnType<typeof getTenantPrisma>;
    }
  }
}
