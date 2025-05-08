const calcultor = {
    num: 55,
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;
    }
}
console.log(calcultor.num);
console.log(calcultor.add(8,9));
console.log(calcultor.sub(8,9));
console.log(calcultor.mul(8,9));

//Methods-Shorthand.
const cal = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}
console.log(cal.add(12,4));
console.log(cal.sub(12,4));