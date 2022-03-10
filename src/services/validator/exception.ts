'use strict';

class Exception extends Error {
  private field;
  private messages
  constructor(field: string, messages: string) {
    super();
    this.field = field;
    this.messages = messages;
  }

  getField() {
    return this.field;
  }

  getMessage() {
    return this.messages;
  }
}

export default Exception;
