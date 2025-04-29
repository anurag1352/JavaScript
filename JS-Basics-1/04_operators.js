// #1 - Arithemetic Operator 
// + - / * % ++ -- 

console.log("Arithemetic");
let num1 = 10;
let num2 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log("Post and Pre Increment and Decrement");
console.log(num1++ + ++num2); // 11 21 31
console.log(++num1 + num2--); // 12 20 33
console.log(num1-- - num2--); // 11 19 -8
console.log(num1-- - --num2); //10 18 -7
console.log(++num1 - --num2); //11 17 -6
console.log(++num1 + --num2); //12 16 28