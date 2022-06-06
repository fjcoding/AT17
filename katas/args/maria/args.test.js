import {analize, argsAnalizer, saveClasses} from './args.js';

import {person} from './args.js';

//print();

test('create the object correctly', ()=>{
    let args = '-n Maria -l Barrios -a 22 -b 02/06/2000 -c coding,english -u';
    argsAnalizer(args);
    let expected = {
        name: 'Maria',
        lastName: 'Barrios',
        age: 22,
        birthday: '02/06/2000',
        classes: [ 'coding', 'english' ],
        university: true
    };
    expect(person).toMatchObject(expected);
});
test('create the object without name', ()=>{
    let args = '-n -l Barrios -a 22 -b 02/06/2000 -c coding,english -u';
    argsAnalizer(args);
    let expected = {
        name: '',
        lastName: 'Barrios',
        age: 22,
        birthday: '02/06/2000',
        classes: [ 'coding', 'english' ],
        university: true
    };
    expect(person).toMatchObject(expected);
});
test('alert unknow flag', ()=>{
    expect(analize('p')).toBe(undefined);
});
test('set university status', ()=>{
    analize('u');
    let expected = {
        university: true
    };
    expect(person.university).toBe(expected.university);
});
test('save classes correctly', ()=>{
    saveClasses('art,english , math');
    let expected = {
        classes: [ 'art', 'english', 'math' ]
    };
    expect(person.classes).toEqual(expected.classes);
});