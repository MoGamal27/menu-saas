import express, { Request, Response, NextFunction } from 'express';
import { TenantController } from '../controllers/tenant-controller';

const router = express.Router();
const tenantController = new TenantController();

router.get('/', tenantController.getAllTenants);
   
router.get('/:subdomain', tenantController.getTenantBySubdomain);

router.post('/', tenantController.createTenant);

router.get('/:id', tenantController.getTenantById);

export default router;
