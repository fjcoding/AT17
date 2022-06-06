//n=name l=lastName a=age b=birthday c=classes u=inUni?
var flags = ['n', 'l', 'a', 'b', 'c', 'u'];
export var person = {
    name:'',
    lastName:'',
    age:0,
    birthday:'',
    classes:[],
    university:false
};


export function argsAnalizer(args) {
    let argsDivided = args.split('-');
    for (let i = 1; i < argsDivided.length; i++) {
        analize(argsDivided[i]);
    }
}

export function analize(subArgs) {
    if (flags.includes(subArgs.substring(0, 1))) {
        if (subArgs.substring(0, 1) == 'n') {
            saveName(subArgs.substring(1, subArgs.length - 1));
        } if (subArgs.substring(0, 1) == 'l') {
            saveLastName(subArgs.substring(1, subArgs.length - 1));
        }
        if (subArgs.substring(0, 1) == 'a') {
            saveAge(subArgs.substring(1, subArgs.length - 1));
        }
        if (subArgs.substring(0, 1) == 'b') {
            saveBirthday(subArgs.substring(1, subArgs.length - 1));
        }
        if (subArgs.substring(0, 1) == 'c') {
            saveClasses(subArgs.substring(1, subArgs.length - 1));
        }
        if (subArgs.substring(0, 1) == 'u') {
            person.university = true;
        }
    } else {
        console.log('unknow flag -' + subArgs.substring(0, 1));
    }
}

export function saveName(name) {
    person.name = name.trim();
}
export function saveLastName(lastName) {
    person.lastName = lastName.trim();
}
export function saveAge(age) {
    if (!isNaN(age)) {
        person.age = parseInt(age);
    } else {
        person.age = 0;
    }
}
export function saveBirthday(birthday) {
    person.birthday = birthday.trim();
}
export function saveClasses(classes) {
    classes = classes.trim();
    classes = classes.replace(/\s+/g, '');
    let classesArray = classes.split(',');
    person.classes = classesArray;
}

export function print() {
    console.log(person);
}

