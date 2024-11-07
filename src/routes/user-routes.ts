import express, { Request, Response, NextFunction } from 'express';
import { UserController } from '../controllers/user-controller';
const userController = new UserController();

const router = express.Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  await userController.createUser(req, res, next);
});
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  await userController.getAllUsers(req, res, next);
});

export default router;

