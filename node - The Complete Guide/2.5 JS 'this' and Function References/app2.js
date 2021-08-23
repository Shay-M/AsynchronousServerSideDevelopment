const person = {
    name: 'dan',
    age: 22,
    greet: () => {
        console.log('Hi, I am ' + this.name);//! arrow fun this ref to global 'Hi, I am undefined'

    }
};

person.greet();

/* ----------------------------------- == ----------------------------------- */

const person = {
    name: 'dan',
    age: 22,
    greet: function () {
        console.log('Hi, I am ' + this.name);

    }
};

person.greet();

/* ----------------------------------- == ----------------------------------- */

const person = {
    name: 'dan',
    age: 22,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

