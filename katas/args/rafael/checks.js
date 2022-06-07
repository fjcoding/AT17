export function login(rules, name) {
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].name == 'loging' && name == '-l') {
            return true;
        }
    }
    return false;
}
export function address(rules, name) {
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].name == 'direction' && name == '-d') {
            return true;
        }
    }
    return false;
}