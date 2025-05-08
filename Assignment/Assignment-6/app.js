//Sol.1
const arrayAverage = (arr) => {
    let total = onabort;
    for(let number of arr) {
        total += number;
    }
    return total/arr.length;
}

let arr = [1,2,3,4,5,6,7,99];
console.log(arrayAverage(arr));

//Sol.2
let num = 8;

const isEven  = (num) => {
    return num % 2 == 0;
}
console.log(isEven(num));

//Sol.3
const object = {
    message: 'hello world',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);


//Sol.4
let length = 4;
function callback() {
    console.log(this.length);
}

const obj = {
    length: 5,
    method(callback) {
        callback();
    },
};

obj.method(callback, 1, 2);