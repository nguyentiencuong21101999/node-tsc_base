import ResponseCode from '../codeResponse/code';
import HttpCode from 'services/codeResponse/http';

class ModelResponse {
  code: string | null;
  data: object;
  message: string;
  constructor() {
    this.code = null;
    this.data = {};
    this.message = '';
  }

  getSuccess() {
    return {
      code: `${this.code ? this.code : HttpCode.OK}`,
      data: this.getData(),
      message: `${this.code && ResponseCode[this.code] ? ResponseCode[this.code] : 'Success'}`,
      getHttpCode: () => {
        return HttpCode.OK;
      },
    };
  }

  setCode(code: string) {
    this.code = code;
    this.message = ResponseCode[code];
  }

  getCode() {
    return this.code;
  }

  setData(data: object) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  setMessage(message: string) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }
}

export default ModelResponse;
