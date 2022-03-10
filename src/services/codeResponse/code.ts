interface Code {
  [key: string]: string;
}
const RESPONSE_CODE: Code = {};

RESPONSE_CODE[(RESPONSE_CODE['SYSTEM_ERROR'] = '5000')] = 'Unknown error from server';

export default RESPONSE_CODE;
