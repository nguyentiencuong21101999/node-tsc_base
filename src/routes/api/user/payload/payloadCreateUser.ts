'use strict';

import BasePayload from '../../../../base/base.payload';

class payloadCreateUser extends BasePayload {
  private userId;
  constructor() {
    super();
    this.userId = {
      value: '',
      validator: ['isString'],
      message: ['fullName is empty', 'fullName is not string'],
    };
  }

  getUserId() {
    return this.userId.value;
  }

  getPayload() {
    return {
      userId: this.getUserId(),
    };
  }
}

export default payloadCreateUser;
