import express, { Request } from 'express';
import { RestaurantProfileController } from '../controllers/restaurant-profile-controller';

const router = express.Router();
const restaurantController = new RestaurantProfileController();

router.post('/', restaurantController.createRestaurantProfile);

export default router;
