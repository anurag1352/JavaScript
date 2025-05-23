let arr = [1,2,3,4,5,-9,10,1,0];
console.log(Math.min(...arr));
console.log(Math.max(...arr));
console.log(...arr);

//Spread with array literals.
let str = ["hello bharat"];
let newStr = [...str];
newStr.push("jai hind");

console.log(str);
console.log(newStr);

let char = [..."hello"];
console.log(char);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let nums = [...odd, ...even];
console.log(nums);

//Spread with object literals.
const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

const dataCopy = {...data, id: 123, country: "India"};
console.log(dataCopy);

let obj = {...arr};
console.log(obj);

let obj2 = {..."Sindhoor"};
console.log(obj2);