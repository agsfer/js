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


let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

for(let i = 1; i < 8; i++) {
    (i == 4) ? console.log("Tru") : ;
    console.log(i);
}

(num == 45) ? console.log("Tru") : console.log("Fal");