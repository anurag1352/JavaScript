let arr = [10,20,30,40,50,90];

let ans = arr.every((el) => {
    return el %10 == 0;
});
console.log(ans);

let nums = [1,3,-9,7,4,-18,-90];

let min = nums.reduce((min, el) => {
    if(min > el){
        return el;
    } else {
        return min;
    }
});
console.log(min);