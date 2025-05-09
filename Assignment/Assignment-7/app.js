//Sol.1

let nums = [1, 2, 3, 4, 5, 6];

const square = nums.map((nums) => nums * nums);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);

let avg = sum / nums.length;
console.log(avg);

//Sol.2
let number = [2,4,-2,6,8];
console.log(number.map ((numbers) => numbers + 5));

//Sol.3
let str = ["adam", "bob", "catlyn", "donald","eve"];
console.log(str.map((string) => string.toUpperCase()));

//Sol.4
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v* 2),
];

console.log(doubleAndReturnArgs([1,2,3],4,4));
console.log(doubleAndReturnArgs([2], 10 , 4));