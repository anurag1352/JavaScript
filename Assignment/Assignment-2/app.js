//Sol.1
let num = [7,9,0,-2];
// num.pop(); //first way.
//console.log(num);
let n = 3;
let ans = num.slice(0, n);
console.log(ans);


//Sol.2
let num2 = [7,9,0,-2];
// num2.shift();
// console.log(num2); //first way
let n2 = 3;

let ans2 = num2.slice(num2.length-n2);
console.log(ans2);

//Sol.3

let str1 = prompt("Enter your value");
if(str1.length === 0 ) {
    console.log("Value are empty");
}else{
    console.log("value is not empty");
}

//Sol.4
let char = prompt("enter your name");
if(char === char.toLowerCase()) {
    console.log("name in lowercase");
}else{
    console.log("not in lowercase");
}

//Sol.5
let str = prompt("enter your string")
console.log(`orignal string = ${str}`);
console.log(`string without space = ${str.trim()}`);

//Sol.6
let arr = ['anurag','a', 67, 78, 90, 100, 64];
let items = 100;

if(arr.indexOf(items) !=-1){
    console.log('elements exits in array');
}else{
    console.log("element doesn't exit in array");
}