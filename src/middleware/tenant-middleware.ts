import { Request, Response, NextFunction} from 'express';
import { PrismaClient } from '@prisma/client';

/*declare global {
  namespace Express {
    interface Request {
      tenantId: string;
      prisma: PrismaClient;
    }
  }
}*/



export const tenantMiddleware = (req: Request, res: Response, next: NextFunction) => {
  req.headers['x-tenant-id'] = req.headers['x-tenant-id'] || 'public';
  next();
};

