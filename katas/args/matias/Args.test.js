const { Args} = require('../matias/Args',);

describe('#Args before refactoring', () => {
    describe('Given a valid schema "i#,b,d##,s*"', () => {
        const schema = 'i#,b,d##,s*';
        describe('Given a valid argument list "-i 10 -b -d 1.1 -s something"', () => {
            const args = ['-i', '10', '-b', '-d', '1.1', '-s', 'something'];
            const sut = new Args(schema, args);
            it('Should return the desired string value when asked about the string argument', () => {
                const strArg = sut.getString('s');
                expect(strArg).toEqual('something');
            });
            it('Should return the desired int value when asked about the int argument', () => {
                const intArg = sut.getInt('i');
                expect(intArg).toEqual(10);
            });
            it('Should return the desired double value when asked about the double argument', () => {
                const doubleArg = sut.getDouble('d');
                expect(doubleArg).toEqual(1.1);
            });
            it('Should return the desired boolean value when asked about the boolean argument', () => {
                const boolArg = sut.getBoolean('b');
                expect(boolArg).toEqual(true);
            });
        });
    });
});
