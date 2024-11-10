import { Request, Response, NextFunction } from 'express';
import { RestaurantProfileService } from '../services/restaurant-profile-service';

export class RestaurantProfileController {
  createRestaurantProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name, description, address } = req.body;
    const service = new RestaurantProfileService();
    await service.init(req); // Initialize with Prisma client
  
    try {
      const newProfile = await service.createRestaurantProfile(name, description, address);
      res.status(201).json(newProfile);
    } catch (error) {
      res.status(500).json({ message: 'Error creating restaurant profile', error });
    }
}
}
