// Sol.1

let num = 20;

if(num%10 === 0) {
    console.log("good");
}else{
    console.log("Bad");
}

//Sol.2

// let userName = prompt("enter your name:");
// let age = prompt("enter your age:");
// // let user = userName + "" +"" + "is" + "" + age + "years old.";
// // alert(user);
// alert(`${userName} is ${age} years old.`);

//Sol.3

let quarter = 4;

switch(quarter) {
    case 1:
        console.log("January, Febuary, March");
        break;
        case 2:
        console.log("April,May,June");
        break;
        case 3:
        console.log("July,August,September");
        break;
        case 4:
        console.log("October, November,December");
        break;
        default:
        console.log("Not a valid!");
}

//Sol.4

let str = 'Anurag';

if(str[0] === 'A','a' && str.length > 5) {
    console.log("golden string");
}else {
    console.log("Not good");
}

//Sol.5

let a = 25;
let b = 18;
let c = 33;

if(a > b) {
    if(a > c) {
        console.log(a , "is largest");
    } else {
        console.log(c, "is largest");
    }
}else {
    if(b > c) {
        console.log(b , "is largest");
    }else {
        console.log(c, "is largest");
    }
}

//Sol.6

let num1 = 358765;
let num2 = 4785;

if((num1%10) == (num2%10)) {
    console.log("The last two digit are same");
}else {
    console.log("The last digits are not same!");
}