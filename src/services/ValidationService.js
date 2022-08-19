const NAMES = 'áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ.´ ';
const ALPHANUMERIC = 'abcdefghijklmnñopqrstuvwxyzáéíóúÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789@._, ';
const TEXT = '0123456789áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789@_.,´;()\'\'- #/ ';
const DIGITS = '0123456789';
const TEL = '0123456789-()';
const NUMBERS = '0123456789.';


export class ValidationService {
  validate(type, value) {
    let VALIDATE_TO;
    let output = '';
    switch (type) {
      case 'NAMES':  VALIDATE_TO = NAMES; break;
      case 'TEXT': VALIDATE_TO = TEXT; break;
      case 'NUMBERS':   VALIDATE_TO = NUMBERS;   break;
      default: break;
    }
    for (let i = 0; i < value.length; i++)
      if (VALIDATE_TO.indexOf(value.charAt(i)) !== -1)
        output += value.charAt(i);
    return output;
  }
}