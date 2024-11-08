import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { getTenantPrisma } from "../../prisma/tenantPrisma";

interface RequestWithTenantPrisma extends Request {
    tenantPrisma: ReturnType<typeof getTenantPrisma>;
}

const prisma = new PrismaClient();

export const tenantMiddleware = async (
    req: RequestWithTenantPrisma,
    res: Response,
    next: NextFunction
) => {
    const subdomain = req.headers['x-tenant'] as string;

    if (!subdomain) {
        return res.status(400).json({
            message: "No tenant provided"
        });
    }

    const tenant = await prisma.tenant.findUnique({
        where: {
            subdomain
        }
    });
    if (!tenant) {
        return res.status(400).json({
            message: "Tenant not found"
        });
    }

        if (tenant) {
        req.tenantPrisma = getTenantPrisma(`tenant_${tenant.id}`);
        return req.tenantPrisma;
    }
    next();
};