import { Router } from 'express';

import UserRouter from './user/user.router';

class ApiRoute {
  private static instance = new ApiRoute();
  constructor() {
    ApiRoute.instance = this;
  }

  public static getInstance(): ApiRoute {
    if (!ApiRoute.instance) {
      ApiRoute.instance = new ApiRoute();
    }
    return ApiRoute.instance;
  }

  public route() {
    const router = Router();
    const userRouter = UserRouter.getInstance();
    router.use('/test', userRouter.route());
    return router;
  }
}
export default ApiRoute;
