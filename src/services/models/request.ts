interface Obj {
  [key: string]: string;
}
class ModelRequest {
  private payload: Obj;
  private headers: Obj;
  constructor() {
    this.headers = {
      ['content-type']: '',
      token: '',
    };
    this.payload = {};
  }

  getHeaders() {
    return this.headers;
  }
  setHeaders(headers: Obj) {
    this.headers = headers;
  }
  getToken() {
    return this.headers.token;
  }

  getPayload() {
    return this.payload;
  }
  setPayload(payload: Obj) {
    this.payload = payload;
    return this;
  }

  getUserId() {
    return this.getPayload().userId;
  }
  getUserType() {
    return this.getPayload().userType;
  }
}
export default ModelRequest;
