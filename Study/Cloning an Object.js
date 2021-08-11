const circle = {
    radius: 1,
    draw() {
        console.log('radius: ' + this.radius);
    }
};
circle.draw();

/* -------------------------------------------------------------------------- */
/* //!               way 1: Assign                                            */
/* -------------------------------------------------------------------------- */
const anotherCircle1 = Object.assign({}, circle);
anotherCircle1.radius = 11;

anotherCircle1.draw();

/* -------------------------------------------------------------------------- */
/* //!               way 2: Spread syntax (...)                               */
/* -------------------------------------------------------------------------- */
const anotherCircle2 = { ...circle };
anotherCircle2.radius = 22;

anotherCircle2.draw();


/*

Q: Both Object.assign and spread operator work fine for single level object like circle
but   what about multi level object  like var obj= { a :1,b: { c:2,d:3 },e:4}.  not work for multi level object.

A: For that, I recommend you to use lodash or underscore.

*/