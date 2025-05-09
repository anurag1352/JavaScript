//every
let arr = [2,4,6];

let ans = arr.every((el) => {
    return el % 2 ==0;
});
console.log(ans);

let arr2 = [21,43,67];

let odd = arr2.every((el) => {
    return el % 2 !==0;
});
console.log(odd);

//Some.
let sum = [1,2,3,8];

let myAns = sum.some((el) => {
    return el%2 ==0;
});
console.log(myAns);