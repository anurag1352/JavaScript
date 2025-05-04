//Q-1 What is the value of age after this code run ?
let age = 20;
age + 2; //after 2 years
//ANS. 20.
console.log(age);

age = age +2;
//ANS.22.
console.log(age);

//Q.2 What is the value of avg after this code run ?
let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) /3 ;
//ANS.90.
console.log(avg);

//Q.3 Declare your name as a string and print its length in JS ?

let myName = "Anurag";
console.log(myName);
let length = myName.length;
console.log(length);

//Q.4 Declare your first name as a string and print its first character.

let firstName = 'Anurag';
console.log(firstName[0]);

//Q5. Declare your first name as a string and print its last character.

let lastName = 'Sharma';
console.log(lastName[5]);

//Q.6 What are lengths of an empty string & a string with a single space ?

let emp = ""; //0
console.log(emp.length);

let space = " "; //1
console.log(space.length);

// Write a function that takes two numbers as arguments and returns their sum.

function sum(num1,num2){
    return num1 + num2;
}

let n1 = 90;
let n2 = 60;

let sumOfTwo = sum(n1,n2);
console.log(sumOfTwo);