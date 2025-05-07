
let sum = 54;//global scope.


function calSum(a,b) {
    let sum = a + b;//function Scope.
    console.log(sum);
}

calSum(1,3);
console.log(sum);

//Block-Scope.
{
    let a = 25;
    console.log(a); //block-scope.
}
// console.log(a); //can't access outside the block.

let age = 25;
if(age>=18){
    let str = "adult";
    console.log(str);
}
// console.log(str);

//Lexical-Scope. (Nested-function).
function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() { //function scope.
        console.log(x);
        console.log(y);
    }
    innerFunc();
}
