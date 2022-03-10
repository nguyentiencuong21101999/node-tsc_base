import { Router, Request, Response } from 'express';

import UserController from './user.controller';
import UserMiddleware from './user.middleware';

class UserRoute {
  private static instance: UserRoute;

  constructor() {
    UserRoute.instance = this;
  }
  public static getInstance(): UserRoute {
    if (!UserRoute.instance) {
      UserRoute.instance = new UserRoute();
    }
    return UserRoute.instance;
  }

  public route() {
    const userController = UserController.getInstance();
    const userMiddleware = UserMiddleware.getInstance();
    const router = Router();
    router.post(
      '/user',
      userMiddleware.createUser,
      userController.createUser,
    );
    return router;
  }
}
export default UserRoute;
