import { rules } from './schema.js';
import { loginRule } from './rules.js';
import { portRule } from './rules.js';
import { addressRule } from './rules.js';
import { addressOrArray } from './checks2.js';
import { login } from './checks.js';
import { port } from './checks2.js';
import { address } from './checks.js';
let string = process.argv[2];
let stringSplitted =  string.split(' ');
let schema = rules();
let result = [];

for (let position = 0; position < stringSplitted.length; position++) {
    if (login(schema, stringSplitted[position])) {
        let list = loginRule();
        result.push(list);
    }
    if (port(schema, stringSplitted[position])) {
        let list = portRule(stringSplitted[position + 1]);
        result.push(list);
    }
    if (address(schema, stringSplitted[position]) && addressOrArray(stringSplitted) == 'direction') {
        let list = addressRule(stringSplitted[position + 1]);
        result.push(list);
    }
}
for (let position = 0; position < result.length; position++) {
    console.log(result[position]);
}
