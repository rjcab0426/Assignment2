var Student = /** @class */ (function () {
    /*setValue(name, email, address, age, marks) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.age = age;
        this.marks = marks;
    }*/
    function Student(name, email, address, age, marks) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.age = age;
        this.marks = marks;
    }
    Student.prototype.showInfo = function () {
        console.log(this.name, this.email, this.address, this.age, this.marks);
    };
    return Student;
}());
var student = new Student('Reman', 'reman@gmail.com', 'San Francisco', '35', '100%');
//student.setValue('Reman','reman@gmail.com','San Francisco','35','100%')
student.showInfo();
