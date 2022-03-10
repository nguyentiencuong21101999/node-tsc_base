class AuthMiddleware {
  private static instance: AuthMiddleware;
  constructor() {
    AuthMiddleware.instance = this;
  }
  public getInstance() {
    if (!AuthMiddleware.instance) {
      AuthMiddleware.instance = new AuthMiddleware();
    }
    return AuthMiddleware.instance;
  }
}
export default AuthMiddleware;
