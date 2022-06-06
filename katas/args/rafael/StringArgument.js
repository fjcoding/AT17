import { ArgsError, ErrorCode } from './ArgsError.js';

export class StringArgumentMarshaler {
    constructor() {
        this.stringValue = '';
    }

    set(argIterator) {
        const { value, done } = argIterator.next();
        if (done) {
            throw new ArgsError(ErrorCode.MISSING_STRING);
        }
        this.stringValue = value;
    }

    static getValue(marshaler) {
        if (marshaler instanceof StringArgumentMarshaler) {
            return marshaler.stringValue;
        }
        return '';
    }
}

export default {
    StringArgumentMarshaler,
};