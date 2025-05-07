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