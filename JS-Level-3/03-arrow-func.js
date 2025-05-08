//1-. Arrow functions.
const sum = (a,b) => {
    console.log(a+b);
}
console.log(sum(67,90));

const cube= (n) => {
    return n * n * n;
}
console.log(cube(3));

const power = (a,b) => {
    return a ** b;
}
console.log(power(9,2));

const helo = () =>{
    console.log("hello");
}
console.log(helo());

//Implicit return in arrow-functions.
const mul = (a,b) => (
    a * b
)
console.log(mul(8,2));