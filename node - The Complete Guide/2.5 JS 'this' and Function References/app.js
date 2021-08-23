
// https://www.youtube.com/watch?v=Pv9flm-80vM&list=LL&index=2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        this.names = ['Max', 'Manu', 'Anna'];
        this.currentName = 0;
        btn.addEventListener('click', () => {
            this.addName();
        });
        // Alternative:
        // btn.addEventListener('click', this.addName.bind(this));
        //! .bind(this): The button is actually the THIS so we will add 'bind(That should be addressed and not the button)'
    }

    addName() {
        console.log(this);
        const name = new NameField(this.names[this.currentName]);
        this.currentName++;
        if (this.currentName >= this.names.length) {
            this.currentName = 0;
        }
    }
}

const gen = new NameGenerator();