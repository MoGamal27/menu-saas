import { Request, Response } from "express";
import { UserService } from "../services/user-service";

export class UserController {
  async createUser(req: Request, res: Response) {
    const userData = req.body;
    const userService = new UserService();
    await userService.createUser(userData);
    res.status(201).json({ message: "User created successfully" });
  }
}