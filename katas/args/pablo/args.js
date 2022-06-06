let input = "-l -p 8080 -d /usr/logs";
let schema = ['-l','-p','-d'];
let flags = [];
let values = [];
let result =[];

for (let index = 0; index < input.length; index++) {
    const element = input[index];
    let val = '';
    if ((element == '-')&&(isLetter(input[index+1]))) {
        flags.push(element + input[index+1])        
        for (let i = index+2; i < input.length; i++) {
            const element = input[i];            
            if(element != '-'){                
                val = val + element
            }
            else{
                break;
            }
            
        }
        values.push(val.replace(/ /g, ''));
    }
}
console.log(flags);
console.log(values);
console.log(flagExist(flags, schema));
correctValues(flags,values);

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function flagExist(arrflags, arrSchema){
    for (let index = 0; index < arrflags.length; index++) {
        const res = arrSchema.includes(arrflags[index]);
        if (res) {
            
        }else{
            console.log('flag not found: ' + arrflags[index]);
            return false;
        }           
    }
    return true;
}

function correctValues(arrFlags, arrValues){
    for (let index = 0; index < arrFlags.length; index++) {
        if (arrFlags[index] === '-l') {
            if (arrValues[index] != 'true') {
                result[index]= 'false';
            }
        }
        if (arrFlags[index] === '-p') {
            if (isNaN(Number(arrValues[index]))|| arrValues[index]==='') {
                result[index]= '0';
            }
        }
        if (arrFlags[index] === '-d') {
            if (isNaN(Number(arrValues[index]))){
            
            }else{
                result[index]= '';
            }
        }
    }
    console.log(result);
}