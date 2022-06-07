

import {loginRule} from "./rules.js";
import {portRule} from "./rules.js";
import {addressRule} from "./rules.js"
test('constructLogging should be retorned a json structure with a logging dates', () => {
    let login = {
        argument: '-l',
        name: 'loging',
        type: 'boolean',
        typeofdata: true
    };
    let result = loginRule();
    expect(result).toStrictEqual(login);
});


