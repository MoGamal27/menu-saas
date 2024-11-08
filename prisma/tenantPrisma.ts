import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

export const getTenantPrisma = (schema: string) => {
    return new PrismaClient({
        datasources: {
            db:{
                url: `${process.env.DATABASE_URL}?schema=${schema}`,
            }
        }
    })
}