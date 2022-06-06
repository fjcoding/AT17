export function isValidValue(value, typeValue, subtypeValue) {
    if (!subtypeValue) {
        switch (typeValue) {
        case 'number':
            return (Number(value) ? value : false);
        case 'string':
            return (Number(value) ? false : value);
        default:
            return false;
        }
    } else {
        return isValidList(value, subtypeValue);
    }
}

export function isValidList (value, subtypeValue) {
    const arrayList = value.split(',');
    let probeNumber = 0;
    if (subtypeValue == 'number') {
        probeNumber = 1;
    }
    for (let i = 0; i < arrayList.length; i++) {
        if (probeNumber == 0 && Number(arrayList[0])) {
            return false;
        } else if (probeNumber == 1 && !Number(arrayList[0])) {
            return false;
        }
    }
    return arrayList;
}