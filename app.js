"use strict"


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели', "12")
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели', "12")
        }
    },
    rememberMyMovies: function() {
        for (let index = 0; index < 2; index++) {
            const a = prompt('Один из последних просмоиренных фильмов?', '')
            const b = prompt('На сколько оцените его?', '')

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b
                console.log('done');
            } else {
                i--
            }

        }
    },

    detectedPersonalLevel: function(params) {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно давольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('вы классный зритель');
        } else if (personalMovieDB.count >= 50) {
            console.log('вы киноман');
        } else {
            console.log('подошла ошибка');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB)
        }
    },

    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat
    },

    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            const ques = prompt(`Ваш любимый фильм под номером ${i}`)
            if (ques == '' || ques == null) {
                console.log('Вы ввели некоректные данные или не ввели их вовсе');
            } else {
                personalMovieDB.genres.push(ques)
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`любимый жанр ${i + 1} - это ${item}`);
        })
    }

};