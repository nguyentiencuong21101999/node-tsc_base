import { Router, Request, Response } from 'express';

class UserController {
  private static instance: UserController;

  constructor() {
    this.createUser = this.createUser.bind(this);
    UserController.instance = this;
  }
  public static getInstance(): UserController {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }
  public async createUser(request: Request, response: Response) {
    try {
      response.json({ abc: 'b' });
    } catch (error) {
      console.error(`Temporal execute createWorker error`, error);
    }
  }
}
export default UserController;
