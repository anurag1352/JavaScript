let arr = ['a','b','c'];
let arr2 = ['a','b','c'];
console.log(arr === arr2); //it print false.

let str = ['a','b','c'];
let strr2 = str;
strr2.push('d','e');
str.pop();
console.log(str === strr2); // it print true.
console.log(str);