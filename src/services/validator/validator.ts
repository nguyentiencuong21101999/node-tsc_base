'use strict';
import MapValidator from './validator.map';
import Exception from './exception';
interface Validator {
  [key: string]: Function;
}
class ValidatorService {
  constructor() {}
  public static validate(field: string, value: any, rules: string[], messages: string[]) {
    try {
      rules.map((rule, index) => {
        MapValidator.map.get(rule)(field, value, messages[index]);
      });
    } catch (exception) {
      throw exception;
    }
  }
  public static isString(field: string, value: any, message?: string) {
    try {
      value = value.trim();
      if (typeof value !== 'string') {
        throw new Exception(field, message ? message : 'is not string');
      }
    } catch (exception) {
      throw exception;
    }
  }
}

export default ValidatorService;
