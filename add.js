let mainArr = makeFirsArr(1, 220);
let mainObj = makeObj(mainArr, makeSumArr(mainArr), mainArr.length);

//разбиваем диапазон на массив
function makeFirsArr(num1, num2) {
    let arr = [];

    for (i = num1; i <= num2; i++) {
        arr.push(i);
    }
    return arr;
}

//создаем объект с двумя выражениями (число и сумма делителей этого числа)
function makeObj(num1, num2, num3) {

}

//создаем массив суммы делителей
function makeSumArr(arr) {

    return sumArr;
}

//находим все делители числа и добавляем их в массив
function getDivisors(num) {
    let result = [];

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }
    return result;
}

//суммируем массив
function arrOneDivision(arr) {
    let sum = 0;
    for (let key of arr) {
        sum += Number(key);
    }
    return sum;
}



console.log(mainObj)



// //Функция которая разбивает диапазон на массив и сливает в массива в один объект
//
// function makeFirsArr(num1, num2) {
//     let arr = [];
//     let obj = {};
//
//     //разбиваем диапазон на массив
//     for (i = num1-1; i <= num2; i++) {
//         arr.push(i);
//     }
//
//     //создаем массив суммы делителей первый
//     let sumArr1 = [];
//     for (let key of arr) {
//         sumArr1.push(arrOneDivision(getDivisors(key)))
//     }
//
//     //создаем массив суммы делителей второй
//     let sumArr2 = [];
//     for (let key of sumArr1) {
//         sumArr2.push(arrOneDivision(getDivisors(key)))
//     }
//
//     let result = [];
//
//     for (i = 0; i <= arr.length; i++) {
//
//         if (arr[i] === sumArr2[i] && sumArr1[i] === sumArr1[arr[i]]) {
//             result.push([arr[i], sumArr1[i]]);
//         }
//     }
//
//     return result;
// }
//
// //находим все делители числа и добавляем их в массив
// function getDivisors(num){
//     let result = [];
//
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }
//
// //суммируем массив
// function arrOneDivision(arr) {
//     let sum = 0;
//     for (let key of arr) {
//         sum += Number(key);
//     }
//     return sum;
// }
//
// console.log(makeFirsArr(1,9000))

let a = 470;
let b = 564;

//собирает массив одинаковых элементов в общий массив
function getGreatestCommonDivisor(num1, num2) {
    let arr1 = [];
    let arr2 = [];
    let result = [];

    arr1 = numberDivider(num1);
    arr2 = numberDivider(num2);

    for (let elem of arr1) {
        if (inArray(elem, arr2)) {
            result.push(elem);
        }
    }
    result = Math.max.apply(null, result);

    return result;
}

//проверка, есть ли одинаковые элементы в массиве
function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}

//создает массив делителей числа
function numberDivider(num) {
    let result = [];

    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }

    result.pop();
    console.log(result);
    return result;
}

console.log(getGreatestCommonDivisor(a, b));



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [1, 2, 3, 4, 5];

function shuffle(arr) {
    let result = [];

    while (0 < arr.length) {
        let elem = getRandomInt(0, arr.length - 1);
        let elems = arr.splice(elem, 1)[0];
        result.push(elems);
    }
    return result;
}

console.log(shuffle(arr));


function fillArr(a, b) {
    let result = [];

    for (i = a; a <= b; a++) {
        result.push(a);
    }
    return result;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
    let result = [];

    while (0 < arr.length) {
        let elem = getRandomInt(0, arr.length - 1);
        let elems = arr.splice(elem, 1)[0];
        result.push(elems);
    }
    return result;
}

console.log(shuffle(fillArr(2, 8)));

function randoms(arr, length) {
    return first(shuffle(arr), length);
}

function first(arr, length) {
    return arr.slice(0, length);
}

function shuffle(arr) {
    let result = [];

    while (arr.length > 0) {
        let random = getRandomInt(0, arr.length - 1);
        let elem = arr.splice(random, 1)[0];
        result.push(elem);
    }

    return result;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(first([1, 2, 3, 4, 5], 3));