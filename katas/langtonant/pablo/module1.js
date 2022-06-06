export class class1 {
    constructor() {
        this.variableA = 1;
        this.variableB = 'a string';
    }

    func1(a, b) {
        var c = parseInt(a) + parseInt(b);
        console.log(c);
        return this.variableA;
    }
}

export function testFunc() {
    console.log('Hello from test func');
}