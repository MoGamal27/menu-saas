import express, { Request, Response } from 'express';
import { UserController } from '../controllers/user-controller';
const userController = new UserController();

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  await userController.createUser(req, res);
});

export default router;

