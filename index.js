const numberOfFilms = +prompt('Сколько фильмов посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

const a = prompt('Последний фильм',''),
      b = prompt('Сколько раз',''),
      c = prompt('Последний фильм',''),
      d = prompt('Сколько раз','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
