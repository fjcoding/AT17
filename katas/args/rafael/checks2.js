export function addressOrArray(cheking) {
    for (let i = 0; i < cheking.length; i++) {
        if (cheking[i] == '-d') {
            const string = cheking[i + 1].split(',');
            if (string.length > 1) {
                return 'array';
            } else {
                return 'direction';
            }
        }
    }
}
export function port(rules, name) {
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].name == 'port' && name == '-p') {
            return true;
        }
    }
    return false;
}