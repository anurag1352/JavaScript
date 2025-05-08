function multipleGreet(func, n) { //higher order function.
    for(let i=1; i<=n; i++){
        func();
    }
}

let greet = function() {
    console.log("hello");
}
multipleGreet(greet,2);

multipleGreet(function() {console.log("namaste")}, 90); //same order in single line.

// let odd = function (n) {
//     console.log(!(n%2 == 0));
// }
// console.log(odd(4));

// let even = function (n) {
//     console.log((n%2 == 0));
// }
// console.log(even(4));

function oddOrEvenFactory(request) {
    if(request == "odd") {
        let odd = function (n) {
            console.log(!(n%2 == 0));
        }

        return odd;
    }else if(request == "even"){
        let even = function (n) {
            console.log((n%2 == 0));
        }

        return even;
    }else{
        console.log("Wrong rquest");
    }
}

let request = "odd"; //even
let func = oddOrEvenFactory(request);
console.log(func(8));
console.log(func(21));