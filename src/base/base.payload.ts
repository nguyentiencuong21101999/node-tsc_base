import MapValidator from '../services/validator/validator.map';
import Validator from '../services/validator/validator';
import LoggerServer from '../services/logger/logger.service';

interface Property {
  value: any;
  validator: string[];
  message: string[];
  parser: string;
}

interface I {
  [key: string]: any;
}

class BasePayload {
  basePayload: I;
  constructor() {
    this.basePayload = this;
  }
  setAll(input: I) {
    try {
      let array = Object.getOwnPropertyNames(this);
      array.forEach((item: string) => {
        console.log('this.basePayload', this.basePayload, this);
        this.set(item, input[item], this.basePayload[item]);
      });
    } catch (e: any) {
      LoggerServer.error(`BasePayload setAll exception ${e.getMessage()}`);
      throw e;
    }
  }
  set(field: string, value: any, property: Property) {
    try {
      LoggerServer.debug(`BasePayload set receive field`, field);
      LoggerServer.debug(`BasePayload set receive value`, value);
      LoggerServer.debug(`BasePayload set receive typeof value`, typeof value);
      value = typeof value === 'string' ? value.trim() : value;
      if (property.parser) {
        property.value = MapValidator.map.get(property.parser);
        LoggerServer.debug(`BasePayload receive value after parse`, property.value);
      }
      if (property.validator) {
        Validator.validate(field, value, property.validator, property.message);
        property.value = value;
      }
    } catch (exception: any) {
      LoggerServer.error(`BasePayload set ${exception.toString()}`);
      throw exception;
    }
  }
}
export default BasePayload;
