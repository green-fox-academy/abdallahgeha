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
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + "from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already.")
    }

    public getGoal() {
        console.log("Be a junior software developer.")
    }


}