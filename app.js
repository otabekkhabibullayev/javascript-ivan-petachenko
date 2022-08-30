"use strict"

let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', "12")
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', "12")
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





function rememberMyMovies() {
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
}

// rememberMyMovies()


function detectedPersonalLevel(params) {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно давольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('вы классный зритель');
    } else if (personalMovieDB.count >= 50) {
        console.log('вы киноман');
    } else {
        console.log('подошла ошибка');
    }
}

// detectedPersonalLevel()

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    }
}
showMyDB()

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const ques = prompt(`Ваш любимый фильм под номером ${i}`)
        personalMovieDB.genres.push(ques)

    }
}

writeYourGenres()