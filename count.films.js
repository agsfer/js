const obj = {
    name: "test",
    width: 1024,
    height: 968,
    colors: {
        border: "black",
        background: "red"
    },
    makeTest: function() {
        console.log("Teeeest");
    }
};

obj.makeTest();

/* for(let key in obj) {
    if( typeof(obj[key]) === 'object') {
        console.log('Obect!')
        for (let i in obj[key]) {
            console.log(`Свойство ${i} - ${obj[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} - ${obj[key]}`);
    }
} */

//console.log(Object.keys(obj).length);

const newObj = {
    a: 2,
    b: 4,
    c: 5
};

const copyObj = newObj;
newObj.a = 10;

const clone = Object.assign({}, newObj);
clone.b = 9;

console.log(clone);
console.log(newObj);

const num = [1, 2, 3];

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

log(...num);

//add lev