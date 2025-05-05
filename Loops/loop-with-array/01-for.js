let fruits = ["mango", "banana", "litchi", "orange"];
fruits.push("pineapple", "mosami");

for(let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}

//reverse for-loop-array.
for(let j=fruits.length-1; j>=0; j--) {
    console.log(j, fruits[j]);
}