let input = '-l -p 8080 -d /usr/logs';
let schema = ['-l', '-p', '-d'];
let flags = [];
let values = [];
let result = [];

for (let index = 0; index < input.length; index++) {
    const element = input[index];
    let val = '';
    if ((element == '-') && (isLetter(input[index + 1]))) {
        flags.push(element + input[index + 1]);
        for (let i = index + 2; i < input.length; i++) {
            const element = input[i];
            if (element != '-') {
                val = val + element;
            } else {
                break;
            }
        }
        values.push(val.replace(/ /g, ''));
    }
}

console.log(flags);
console.log(values);
console.log(flagExist(flags, schema));
correctValues(flags, values);

export function isLetter(str) {
    if(str.length === 1 && str.match(/[a-z]/i))
    {return true;}
    else
    {return false;}
}

export function flagExist(arrflags, arrSchema) {
    for (let index = 0; index < arrflags.length; index++) {
        const res = arrSchema.includes(arrflags[index]);
        if (!res) {
            console.log('flag not found: ' + arrflags[index]);
            return false;
        }
    }
    return true;
}

export function correctValues(arrFlags, arrValues) {
    for (let index = 0; index < arrFlags.length; index++) {
        if (arrFlags[index] === '-l') {
            if (arrValues[index] != 'true') {
                result[index] = 'false';
            } else {
                result[index] = arrValues[index];
            }
        }
        if (arrFlags[index] === '-p') {
            if (isNaN(Number(arrValues[index])) || arrValues[index] === '') {
                result[index] = '0';
            } else {
                result[index] = arrValues[index];
            }
        }
        if (arrFlags[index] === '-d') {
            if (isNaN(Number(arrValues[index]))) {
                result[index] = arrValues[index];
            } else {
                result[index] = '';
            }
        }
    }
    console.log(result);
    return result;
}