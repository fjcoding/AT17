//export let check;
export let types = {
    l:boolean,
    p:number,
    d:string,
    g:arrayString,
    j:arrayNumber
};
export let valueArgs = {
    l:false,
    p:0,
    d:'',
    g:[],
    j:[]
};
export function boolean() {
    return true;
}
export function number(value) {
    let verify =  !isNaN(value) && !isNaN(parseInt(value));
    if (verify) {
        return parseInt(value);
    } else {
        return null;
    }
}
export function string(value) {
    let verify =  isNaN(value) && isNaN(parseInt(value));
    if (verify) {
        return value;
    } else {
        return null;
    }
}
export function arrayString(value) {
    value = value.split(',');
    let allString = true;
    for (let i = 0; i < value.length; i++) {
        let check = string(value[i]);
        if (check == null) {
            allString = false;
            break;
        } value[i] = check;
    } if (allString) {
        return value;
    } else {
        return null;
    }
}
export function arrayNumber(value) {
    value = value.split(',');
    let allNumbers = true;
    for (let i = 0; i < value.length; i++) {
        let check = number(value[i]);
        if (check == null) {
            allNumbers = false;
            break;
        } value[i] = check;
    }
    if (allNumbers) {
        return value;
    } return null;
}