class Student {
    constructor(id, name, average, EXTRA = 0) {
        // if (!Number.isNaN(id))
        if (parseInt(id.toString()))
            this.id = id;
        else
            throw new ExceptionOfStudent(`id: ' ${id} '  is not a Number! it is a ${typeof (id)}`);

        if (typeof (name) == 'string')
            this.name = name;
        else
            throw new ExceptionOfStudent(`id: ' ${id} '  is not a Number! it is a ${typeof (id)}`);

        if (parseInt(average.toString()))
            this.average = average;
        else
            throw new ExceptionOfStudent(`average: ' ${id} '  is not a Number! it is a ${typeof (id)}`);

        if (EXTRA != 0) {
            throw new ExceptionOfStudent(`Illegal string format for student. Should be: name,id,average. The surplus: ${EXTRA}`);
        }

    }


    toString() {
        return ` [ ${this.id} | ${this.name} | ${this.average} ] `;
    }

    //The from() method returns an Array object from any object with a length property or any iterable object.
    static from(StringOfStudent) {
        return new Student(...StringOfStudent.split(","));
    }

    static fromArrayOfStringStudent(ArrayOfStringStudent) {

        for (let i = 0; i < ArrayOfStringStudent.length; i++) {
            ArrayOfStringStudent[i] = ArrayOfStringStudent[i].toString();
        }
        //Array map() :Return a new array with the square root of all the original values:
        return ArrayOfStringStudent.map(student => Student.from(student));
    }

}

class ExceptionOfStudent {
    constructor(msg) { this.msg = msg; }

}

