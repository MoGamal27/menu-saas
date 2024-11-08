import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { TenantService } from "../services/tenant-service";

export class TenantController {
    private tenantService: TenantService;
    constructor() {
        this.tenantService = new TenantService();
    }

  createTenant = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name, subdomain} = req.body;
    const newTenant = await this.tenantService.createTenant(name, subdomain);
        res.status(201).json({ message: "Tenant created successfully", tenant: newTenant });
  })

  getAllTenants = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const tenants = await this.tenantService.getAllTenants();
    res.status(200).json({ message: "Tenants fetched successfully", tenants });
  })

  getTenantBySubdomain = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { subdomain } = req.params;
    const tenant = await this.tenantService.getTenantBySubdomain(subdomain);
    res.status(200).json({ message: "Tenant fetched successfully", tenant });
  })

  getTenantById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params as any;
    const tenant = await this.tenantService.getTenantById(id);
    res.status(200).json({ message: "Tenant fetched successfully", tenant });
  })

}