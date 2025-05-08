//Sol.1
const square = (n) => {
    return n * n;
};
console.log(square(4));

//Sol.2
let id = setInterval( () => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval ran.")
}, 10000);