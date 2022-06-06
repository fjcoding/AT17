import { ArgsError, ErrorCode } from './ArgsError.js';

export class DoubleArgumentMarshaler {
  constructor() {
    this.doubleValue = 0;
  }

  set(argIterator) {
    const { value: parameter, done } = argIterator.next();
    if (done) {
      throw new ArgsError(ErrorCode.MISSING_DOUBLE);
    }
    const value = parseFloat(parameter);
    if (Number.isNaN(value)) {
      throw new ArgsError(ErrorCode.INVALID_DOUBLE, undefined, parameter);
    }
    this.doubleValue = value;
  }

  static getValue(marshaler) {
    if (marshaler instanceof DoubleArgumentMarshaler) {
      return marshaler.doubleValue;
    }
    return 0;
  }
}

export default {
  DoubleArgumentMarshaler,
};