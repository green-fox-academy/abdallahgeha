'use strict';

class Person {
    protected _name: string
    protected _age: number
    protected _gender: string

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
    protected specificIntroduction(): string {
        return "";
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + ".")
    }

    public getGoal() {
        console.log("My goal is: Live for the moment!")
    }

}

class Student extends Person {
    private _previousOrganization: string
    private _skippedDays: number

    constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
        super(name, age, gender)
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
    protected specificIntroduction(): string {
        return "from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already.";
    }
    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + "from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already." + this.specificIntroduction())
    }

    public getGoal() {
        console.log("My goal is: Be a junior software developer.")
    }

    public skipDays(numberOfDays) {
        this._skippedDays += numberOfDays
    }
}

class Mentor extends Person {

    private _level: string

    constructor(name?: string, age?: number, gender?: string, level?: string) {
        super(name, age, gender)
        if (name && gender && age && level) {

            this._level = level
        } else {

            this._level = 'intermidiate'
        }
    }

    protected specificIntroduction(): string {
        return ' ' + this._level + " mentor.";
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + this.specificIntroduction())
    }

    public getGoal() {
        console.log("My goal is: Educate brilliant junior software developers.")
    }

}

class Sponsor extends Person {

    private _company: string
    private _numberOfStudentHired: number

    constructor(name?: string, age?: number, gender?: string, company?: string) {
        super(name, age, gender)
        if (name && gender && age && company) {

            this._company = company
            this._numberOfStudentHired = 0
        } else {

            this._company = 'Google'
            this._numberOfStudentHired = 0
        }
    }

    protected specificIntroduction(): string {
        return " who represents " + this._company + " and hired " + this._numberOfStudentHired + " students so far.";
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + this.specificIntroduction())
    }

    public getGoal() {
        console.log("My goal is: Hire brilliant junior software developers.")
    }

    public hire() {
        this._numberOfStudentHired++
    }

}

class Cohort {
    private _name: string;
    private _students: Student[];
    private _mentors: Mentor[];

    constructor(name: string) {
        this._name = name;
        this._students = [];
        this._mentors = [];
    }

    public addStudent(student : Student) {
        this._students.push(student)
    }

    public addMentor(mentor : Mentor){
        this._mentors.push(mentor)
    }

    public info() {
        console.log(`The ${this._name} cohort has ${this._students.length} students and ${this._mentors.length} mentors`)
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

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    sponsor.hire();
}

for (let person of people) {
    person.introduce();
    person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();