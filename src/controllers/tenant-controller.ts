import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { TenantService } from "../services/tenant-service";
 
const tenantService = new TenantService();

export class TenantController {

  createTenant = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name, subdomain} = req.body;
    const newTenant = await tenantService.createTenant(name, subdomain);
        res.status(201).json({ message: "Tenant created successfully", tenant: newTenant });
  })

  
}