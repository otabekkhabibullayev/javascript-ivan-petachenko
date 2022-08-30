"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', "12")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log("Просмотренно давольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('вы классный зритель');
} else if (personalMovieDB.count >= 50) {
    console.log('вы киноман');
} else {
    console.log('подошла ошибка');
}




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


console.log(personalMovieDB);