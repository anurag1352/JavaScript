//1. VARIABLE DECLARATION AND DATA TYPE.
// Declare variables for the following and print them:
// - Your name
// - Your age
// - Whether you are a student
// - Your height (in cm)

//SOL.1
let myName = "Anurag";
let myAge = 20;
let isStudent = true;
let height = 175;

// console.log(myName , myAge , isStudent, height);
console.log("Name = ",myName);
console.log( " Age = ",myAge);
console.log("Student = ",isStudent);
console.log("Height = ",height);


//2. Simple Arithmetic Calculator
//Sol.2
let a = 10;
let b = 2;
console.log("sum: ",a + b);
console.log("diff: ",a - b);
console.log("Product: ",a * b);
console.log("Quotient: ",a / b);

//3. Even or Odd Checker
//Sol.3
let number = -21;
if(number %2 === 0){
    console.log("Number is even = ", number);
}else{
    console.log("Number is odd = ", number);
}

//4. Swapping Two Variables
//Sol.4
let num1 = 10;
let num2 = 20;

let temp = num1;
num1 = num2;
num2 = temp;
console.log(num1);
console.log(num2);

//5. Temperature Converter
//Sol.5
let cel = 12;
let fah = (cel * 9/5) + 32;
console.log(`${cel}°C = ${fah}°F`);


// 6. Grading System
// Take a score (0-100)
// Print grade:
// 90-100 → A
// 80-89 → B
// 70-79 → C
// 60-69 → D
// Below 60 → F

//Sol.6
// let score = parseFloat(prompt("Enter Your Score 0-100"));

// if(score >= 90 && score <= 100){
//     console.log("Grade : A");
// }else if(score >= 80 && score < 90){
//     console.log("Grade : B");
// }else if(score >= 70 && score < 80){
//     console.log("Grade : C");
// }else if(score >= 60 && score < 70){
//     console.log("Grade : D");
// }else if(score >=0 && score < 60){
//     console.log("Grade : F");
// }else{
//     console.log("Invalid Number");
// }

//7. Print Numbers from 1 to 20
//Sol.7
for(let i = 1; i <= 20; i++){
    console.log(i);
}

//8. Sum of First N Natural Numbers
//Sol.8
let n = 10;
let sum = 0;

for(let i = 1 ; i<=n ; i++){
    sum += i;
}
console.log(sum);

// 9. Multiplication Table Generator
//Sol.9
// let x = parseInt(prompt("Enter Your No."));

// for(let i = x; i<= x*10; i += x){
//     console.log(i);
// }

//10. FizzBuzz (Classic)
//Sol.9
for(let i = 1; i<= 50; i++){
    console.log(i);

    if(i %3 === 0){
        console.log("Fizz");
    }else if(i %5 === 0){
        console.log("Buzz");
    }else if(i %3 == 0 && i %5 == 0){
        console.log("FizzBuzz");
    }else{
        console.log("Not divisible by both value");
    }
}