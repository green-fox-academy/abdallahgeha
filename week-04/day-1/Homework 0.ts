'use strict';

class Person {
    private _name: string
    private _age: number
    private _gender: string

    constructor(name?: string, age?: number, gender?: string) {
        if (name && gender && age) {
            this._name = name
            this._age = age
            this._gender = gender
        } else {
            this._name = 'jane Doe'
            this._age = 30
            this._gender = 'female'
        }
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + ".")
    }

    public getGoal() {
        console.log("My goal is: Live for the moment!")
    }

}

class Student {
    private _name: string
    private _age: number
    private _gender: string
    private _previousOrganization: string
    private _skippedDays: number

    constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
        if (name && gender && age && previousOrganization) {
            this._name = name
            this._age = age
            this._gender = gender
            this._previousOrganization = previousOrganization
            this._skippedDays = 0
        } else {
            this._name = 'jane Doe'
            this._age = 30
            this._gender = 'female'
            this._previousOrganization = 'The School of Life'
            this._skippedDays = 0
        }
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + "from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already.")
    }

    public getGoal() {
        console.log("My goal is: Be a junior software developer.")
    }

    public skipDays(numberOfDays) {
        this._skippedDays += numberOfDays
    }

}

class Mentor {
    private _name: string
    private _age: number
    private _gender: string
    private _level: string

    constructor(name?: string, age?: number, gender?: string, level?: string) {
        if (name && gender && age && level) {
            this._name = name
            this._age = age
            this._gender = gender
            this._level = level
        } else {
            this._name = 'jane Doe'
            this._age = 30
            this._gender = 'female'
            this._level = 'intermidiate'
        }
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + ' ' + this._level + " mentor.")
    }

    public getGoal() {
        console.log("My goal is: Educate brilliant junior software developers.")
    }

}

class Sponsor {
    private _name: string
    private _age: number
    private _gender: string
    private _company: string
    private _numberOfStudentHired: number

    constructor(name?: string, age?: number, gender?: string, company?: string) {
        if (name && gender && age && company) {
            this._name = name
            this._age = age
            this._gender = gender
            this._company = company
            this._numberOfStudentHired = 0
        } else {
            this._name = 'jane Doe'
            this._age = 30
            this._gender = 'female'
            this._company = 'Google'
            this._numberOfStudentHired = 0
        }
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + " who represents " + this._company + " and hired " + this._numberOfStudentHired + " students so far.")
    }

    public getGoal() {
        console.log("My goal is: Hire brilliant junior software developers.")
    }

    public hire() {
        this._numberOfStudentHired++
    }

}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    sponsor.hire();
}

people.forEach((person) => {
    person.introduce();
    person.getGoal();
});
