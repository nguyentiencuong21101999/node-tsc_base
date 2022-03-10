import { Request, Response, NextFunction } from 'express';
import payloadCreateUser from './payload/payloadCreateUser';
class UserMiddleware {
  private static instance: UserMiddleware;

  constructor() {
    this.createUser = this.createUser.bind(this);
    UserMiddleware.instance = this;
  }

  public static getInstance() {
    if (!UserMiddleware.instance) {
      UserMiddleware.instance = new UserMiddleware();
    }
    return UserMiddleware.instance;
  }
  public async createUser(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const payload = new payloadCreateUser();
      payload.setAll(request.body);
      next();
    } catch (e) {
      response.json({ abc: 'abc' });
      throw e;
    }
  }
}

export default UserMiddleware;
