/*The purpose of the factory is to create objects. It’s usually implemented in a class or a
static method of a class, which has the following purposes:
• Performs repeating operations when setting up similar objects
• Offers a way for the customers of the factory to create objects without knowing
the specific type (class) at compile time
The second point is more important in static class languages in which it may be nontrivial to create instances of classes,
which are not known in advance (in compile time).
In JavaScript, this part of the implementation is quite easy.
The objects created by the factory method (or class) are by design inheriting from the
same parent object; they are specific subclasses implementing specialized functionality.
Sometimes the common parent is the same class that contains the factory method.*/

// parent constructor
function CarMaker() { }

// a method of the parent
CarMaker.prototype.drive = function () {
    return "Vroom, I have " + this.doors + " doors";
};

// the static factory method
CarMaker.factory = function (type) {
    var constr = type,
        newcar;
    // error if the constructor doesn't exist
    if (typeof CarMaker[constr] !== "function") {
        throw {
            name: "Error",
            message: constr + " doesn't exist"
        };
    }
    // at this point the constructor is known to exist
    // let's have it inherit the parent but only once
    if (typeof CarMaker[constr].prototype.drive !== "function") {
        CarMaker[constr].prototype = new CarMaker();
    }

    // create a new instance
    newcar = new CarMaker[constr]();

    // optionally call some methods and then return...
    return newcar;
};

// define specific car makers
CarMaker.Compact = function () {
    this.doors = 4;
};
CarMaker.Convertible = function () {
    this.doors = 2;
};
CarMaker.SUV = function () {
    this.doors = 24;
}

////////////////////////////////

var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');

console.log(corolla.drive());// "Vroom, I have 4 doors"
console.log(solstice.drive());// "Vroom, I have 2 doors"
console.log(cherokee.drive());// "Vroom, I have 17 doors"



