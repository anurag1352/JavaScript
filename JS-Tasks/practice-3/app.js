let str = 'Anurag';

if(str[0] === 'a' && str.length < 3) {
    console.log("String are good")
}
else {
    console.log("String is not good")
}

//Q.2 Output of the code.
//Ans. Safe.

let num = 12;

if((num%3 === 0) && (num+1 == 15) || (num-1 ==11)) {
    console.log("Safe");
}else{
    console.log("Unsafe");
}