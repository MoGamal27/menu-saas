import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user-service";
import asyncHandler from "express-async-handler"

export class UserController {

  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }
  createUser = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, role } = req.body;
   const user = await  this.userService.createUser(name, email, password, role);
    res.status(201).json({ message: "User created successfully", user });
  });

  getAllUsers = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
    const users = await this.userService.getAllUsers();
    res.status(200).json({ message: "Users retrieved successfully", users });
  })
}