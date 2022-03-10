import Validator from './validator';
const NAME_MAP = {
  IS_STRING: 'isString',
};
let map = new Map();
map.set(NAME_MAP.IS_STRING, Validator.isString.bind(Validator));
class MapValidator {
  static get map() {
    return map;
  }
  static get NAME_MAP() {
    return NAME_MAP;
  }
}
export default MapValidator;
