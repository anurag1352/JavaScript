//Sol.1
let arr1 = [1,2,3,4,5,6,2,3];
let num = 2;

for(i=0; i<arr1.length; i++){
    if(arr1[i] == num){
        arr1.splice(i,1);
    }
}
console.log(arr1);

//Sol.2
let number1 = 2578786;
let count = 0;

let copy1 = number1;

while(copy1 > 0){
    copy1++;
    copy = Math.floor(copy1/10);
}
console.log(count);

//Sol.3
let number = 287152;
let sum = 0;

let copy = number;

while(copy > 0){
    digit = copy % 10;
    sum+= digit;
    copy = Math.floor(copy/10);
}
console.log(sum);

//Sol.4
let n = 7;
let factorial = 1;

for(let i=1; i<=n; i++){
    factorial *= i;
}
console.log(`factorial of ${n} is ${factorial}`);

//Sol.5
let arr = [2,5,7,8,91,6,111,3];
let largest = 0;

for (let i=0; i<=arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}

console.log(largest);