class Student {
    name: string;
    age: number;
    address: string;
    email: string;
    marks: number[];

    /*setValue(name, email, address, age, marks) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.age = age;
        this.marks = marks;
    }*/ 

    constructor (name, email, address, age, marks) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.age = age;
        this.marks = marks;
    }

    showInfo() {
        console.log(this.name, this.email, this.address, this.age, this.marks);
    }
}

let student = new Student ('Reman','reman@gmail.com','San Francisco','35','100%');
//student.setValue('Reman','reman@gmail.com','San Francisco','35','100%')
student.showInfo();