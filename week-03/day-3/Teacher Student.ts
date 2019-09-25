'use strict'

class Student {


    public learn (){
        console.log('student is learning somthing')
    }

    public question(teacher : Teacher){
        teacher.answer();
    }
}

class Teacher {

    public teach(student : Student){
        student.learn();
    }

    public answer(){
        console.log('the teacher is answering a question');
    }
}

let student = new Student;
let teacher = new Teacher;
student.question(teacher);
teacher.teach(student);

