const obj = {
    name: "test",
    width: 1024,
    height: 968,
    colors: {
        border: "black",
        background: "red"
    }
};

for(let key in obj) {
    if( typeof(obj[key]) === 'object') {
        console.log('Obect!')
        for (let i in obj[key]) {
            console.log(`Свойство ${i} - ${obj[key][i]}`);
        }
    }
    console.log(`Свойство ${key} - ${obj[key]}`);
}