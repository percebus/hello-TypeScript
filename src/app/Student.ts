/// <reference path="IPerson.ts"/>

class Student implements IPerson {
    firstName: string;
    lastName: string;

    constructor(person:IPerson) {
        this.firstName = person.firstName;
        this.lastName = person.lastName;
    }
}