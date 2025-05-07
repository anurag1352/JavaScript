function sum(a,b) {
    console.log("hello");
    console.log("hello");
    return a+b;
    console.log("hello2");
    console.log("hello2");
}

//1st-Way
// let op = sum(3,9);
// console.log(op);

//2nd-Way
console.log(sum(6,6));

//Sum of 3 number.
// let cal = sum(sum(1,2),3);
// console.log(cal);

// //2nd-way.
// console.log(sum(sum(1,2),9));

function isAdult(age) {
    if(age>=18) {
        return "adult";
    }else{
        return "Not adult"
    }
    console.log("bye bye");//not execute.
}

console.log(isAdult(300));