import express, { Express, Application, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { tenantMiddleware } from './middleware/tenant-middleware';
import userRoutes from './routes/user-routes';
import tenantRoutes from './routes/tenant-routes';
import restaurantRoutes from './routes/restaurant-routes';
import cors from 'cors';
dotenv.config();

export const prisma = new PrismaClient();

const app: Application = express();
const port = process.env.PORT || 4000;


async function main() {
  
app.use(express.json());

app.use(cors());

app.use('/users', userRoutes);
app.use('/tenants', tenantRoutes);

app.use(tenantMiddleware);
app.use('/restaurants', restaurantRoutes);

app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
}

main()
  .then(async () => {
    await prisma.$connect();
    console.log('Database connected');
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    console.error('Database connection failed');
    process.exit(1);
  });

