class Student {
    constructor(id, name, average) {
        if (Number.isNaN(id))
            this.id = id;
        else
            throw new ExceptionOfStudent(`id: ' ${id} '  is not a Number! it is a ${typeof (id)}`);

        this.name = name;
        this.average = average;
    }


    toString() {
        return ` [ ${this.id} | ${this.name} | ${this.average} ] `;
    }

    //The from() method returns an Array object from any object with a length property or any iterable object.
    static from(StringOfStudent) {

        let ConvertToStudent = new Student(...StringOfStudent.split(","));

        return ConvertToStudent

    }

    static fromArrayOfStringStudent(ArrayOfStringStudent) {

        for (let i = 0; i < ArrayOfStringStudent.length; i++) {
            ArrayOfStringStudent[i] = ArrayOfStringStudent[i].toString();
            // Student.validateStudentDataString(ArrayOfStringStudent[i]);
        }

        return ArrayOfStringStudent.map(student => Student.from(student));
    }

}

class ExceptionOfStudent {
    constructor(msg) { this.msg = msg; }

}

