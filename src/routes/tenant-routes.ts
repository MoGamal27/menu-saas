import express, { Request, Response, NextFunction } from 'express';
import { TenantController } from '../controllers/tenant-controller';

const router = express.Router();
const tenantController = new TenantController();


router.post('/', tenantController.createTenant);



export default router;
