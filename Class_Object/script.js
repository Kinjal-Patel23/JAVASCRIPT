class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`;
    }
    
}

const stud1 = new Student("Lara", 20 , "Web Development");
const stud2 = new Student("John", 21, "Graphic Design");
const stud3 = new Student("Zane", 19, "Data Science");

console.log(stud1. getDetails());
console.log(stud2.getDetails());
console.log(stud3.getDetails());

console.log("-----------------------------------------------------------------");

class Teacher {
    constructor() {
        this.name = "John Doe";
        this.subject = "Mathematics";
        this.experience = 5;
    }

    introduce() {
        console.log(`Name: ${this.name}, Subject: ${this.subject}, Experience: ${this.experience}`);
    }
}

const obj = new Teacher();

obj.introduce();