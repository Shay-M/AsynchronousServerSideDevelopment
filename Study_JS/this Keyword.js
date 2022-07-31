const movieNotGood = {
  title: 'Dogs and Cats 2',
  tags: ['kids', 'cartoon', 'comedy'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); //! get global Window
    });
  },
};
movieNotGood.showTags();

////////////////////////////////////////////////////////////////////

const movie = {
  title: 'Dogs and Cats 2',
  tags: ['kids', 'cartoon', 'comedy'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this); //*need to add same this
  },
};
movie.showTags();

/////////////////////////////////

/* 
- Using 'this' within a method called on a specific object 'this' points at
  the object on which the method was called.
- Using 'this' within a global function 'this' points at the Window object.
-//! Using 'this' within the scope of a closure points at the Window object as well. */

let name = 'Moshico';

let func = function () {
  let name = 'George';

  let f2 = function () {
    name: 'Jane';

    let f1 = function () {
      return this.name; //<< //! Moshico
    };

    return f1();
  };

  return f2();
};
console.log(func()); //! Moshico
