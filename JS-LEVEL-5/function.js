//function decaration.
function run() {
    console.log("running");
}
run();

//Named function assignment.
let stand = function walk(){
    console.log('walking');
}
stand();

let jump = stand;
jump();

//Anonymous function assignment.
let stand2 = function(){
    console.log('bhago');
}
stand2();

// dynamical Example.
function sum(a, b){
    return a+b;
}
console.log(sum(1,3));
console.log(sum(1));
console.log(sum());
console.log(sum(-10,8));
console.log(sum(10,8,9));

//Argument example.
function arg(){
    console.log(arguments);
    let total = 0;
    for(let value of arguments){
        total = total + value;
    }
    return total;
}

let myArg = arg(2,3,4,6,7,8);
console.log(myArg);

//Rest Operator.
function num(num, value,...args) {
    console.log(num , value, args);
}
num(1,2,3,4,5,6);

//Default Parameters.
function intrust(p, r = 5, y = 10) {
    return p*r*y/100;
}
console.log(intrust(10000, 12, 4));
//console.log(intrust(10000, undefined, 4));

//#GETTER & SETTER.
//getter -> access properties.
//setter -> change or mutate properties.

let person = {
    fName: "anurag",
    lName: "sharma",
    get  fullName() {
        return  `${person.fName} ${person.lName}`;
    },
    set fullName(value) {
        if(typeof value !== String){
            throw new Error("You have not sent a string");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}
try{
    person.fullName = 1;
} catch(e){
    alert(e);
}


// console.log(person);

// console.log(person.fullName);
console.log(person.fullName);