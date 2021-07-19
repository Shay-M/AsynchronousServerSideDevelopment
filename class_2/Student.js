/*You should develop a new library that includes a function that takes an array of strings 
(each string describes a specific student, and each string includes - 
in this order - the id, name, and average - and the separator character is ,)
and returns an array of objects instantiated from Student, a class you should define
accordingly. You should use the map function (Array.prototype.map). 
If the structure of a specific string is not the expected, an exception should be thrown. 
The library should include the definition for a class that describes the exception.*/

class Student {
    constructor(id, name, average) {
        this.id = id;
        this.name = name;
        this.average = average;

    }

    static from(string) {
        string.split(",")
        let oneStudent = new Student();


    }

}
