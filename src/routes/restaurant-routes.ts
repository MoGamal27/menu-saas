import express, { Request } from 'express';
import { tenantMiddleware } from '../middleware/tenant-middleware';
import { RestaurantProfileController } from '../controllers/restaurant-profile-controller';

const router = express.Router();
const restaurantController = new RestaurantProfileController();

router.post('/restaurant', tenantMiddleware, restaurantController.createRestaurantProfile);

export default router;
