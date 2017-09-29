/// <reference path="IPerson.ts"/>
/// <reference path="Student.ts"/>
function greet(person) {
    return [
        'Hello ',
        person.firstName,
        '!'
    ]
        .join('');
}
var oStudent = new Student({ firstName: 'JC', lastName: 'Guerrero' });
var msg = greet(oStudent);
console.log(msg);
//# sourceMappingURL=greet.js.map