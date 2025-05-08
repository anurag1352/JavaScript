//Sol.1
//for greater value.
let arr = [5,10,15,20,25];
let num = 19;

function getElements(arr,num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);

//For-smaller value.
let arr2 = [5,10,15,20,25];
let num2 = 9;

function getElement(arr2,num2){
    for(let i=0; i<arr2.length; i++){
        if(arr2[i] < num2){
            console.log(arr2[i]);
        }
    }
}
getElement(arr2,num2);

//Sol.2
let str = "aabbccddeeffgghh";

function getUnique(str){
    let ans = "";
    for(let i=0; i<str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }  
    return ans;
}

console.log(getUnique(str));

//Sol-3.
let country = ["Australia", "Germany","United-State-of-america"];

function longestName(country){
    let ansIdx = 0;
    for(let i=0; i<country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
console.log(longestName(country));

//Sol.4
let myStr = ["apnacollege"];

function countVowels(myStr) {
    let count = 0;
    for(let i=0; i<str.length; i++){
        if (
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u" 
        ) {
            count++;
        }
    }
    return count;
}
console.log(countVowels(myStr));

//Sol 5.
let start = 100;
let end = 200;

function generateRandom(start,end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start,end));