const movieNotGoog = {
    title: 'Dogs and Cats 2',
    tags: ['kids', 'cartoon', 'comedy'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag); //! get global Window
        });

    }
}
movieNotGoog.showTags();



const movie = {
    title: 'Dogs and Cats 2',
    tags: ['kids', 'cartoon', 'comedy'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this); //*need to add same this

    }
}
movie.showTags();

