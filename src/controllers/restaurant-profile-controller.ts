import { Request, Response, NextFunction } from 'express';
import { RestaurantProfileService } from '../services/restaurant-profile-service';

export class RestaurantProfileController {
  createRestaurantProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name, description, address } = req.body;
    const restaurantService = new RestaurantProfileService(req.tenantPrisma);
    
    const restaurant = await restaurantService.createRestaurantProfile(
      name,
      description,
      address
    );
    
    res.status(201).json({
      success: true,
      message: "Restaurant profile created successfully",
      data: restaurant
    });
  };
  getAllRestaurantProfiles = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const restaurantService = new RestaurantProfileService(req.tenantPrisma);
    
    const restaurant = await restaurantService.getAllRestaurantProfiles();
    
    res.status(200).json({
      success: true,
      message: "Restaurant profile fetched successfully",
      data: restaurant
    });
  };
}
