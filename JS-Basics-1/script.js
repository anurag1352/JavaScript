//line below is used to print on the console window
// console.log('Namaste duniya version4');

// //Variables

// //let Variable!
// let a = 'sharma';
// console.log(a);

// //var Variable!
// var lastName = 'anurag';
// console.log(lastName);

// //constant Variable!
// const num = 123;
// // num = 321;
// console.log(num);

// //Dynamicaly Type
// let age = 'pata nahi';
// console.log(age);

// age = 20;
// console.log(age);

let a = 5;
let b = 10;

// console.log((++a)*(--b));
// console.log((a++)*(--b));
console.log((a++)*(b--));
console.log((++a)*(b--));
console.log (typeof a);


//Truthy & Falsey Values

let string = " ";

if(string) {
    console.log("String is not empty")
}else {
    console.log("String is empty")
}

let num = 9;

if(num) {
    console.log("num is not equall to 0");
} else {
    console.log("num is equall to 0")
}