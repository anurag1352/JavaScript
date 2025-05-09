function sum(...args) {
    for(let i=0; i<args.length; i++){
        console.log("you gave us: ", args[i]);
    }
};
sum(1,3,-9,0);

function min(a,b,c,d) {
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push(1); //thow an error.
};
min(2,3,6,8);

function arg(...args) {
  return args.reduce((sum,el) => sum + el);
}
console.log(arg(1,2,3,6));
console.log(arg(1,-283763,337,600));

//function for max value.
function max(msg, ...args) {
    console.log(msg);
    return args.reduce((max, el) => {
        if(max > el) {
            return max;
        } else {
            return el;
        }
    })
};
console.log(max("sindhoor",9,19,8,-8,89));