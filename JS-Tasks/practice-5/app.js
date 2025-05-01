//Sol.1
let msg = "   help!   ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

//Sol.2
let apnaName = "ApnaCollege";
let newName1 = apnaName.slice(4,9);
console.log(newName1); //Colle  

let newName2 = apnaName.indexOf("na");
console.log(newName2); //2

let newName3 = apnaName.replace("Apna","Our");
console.log(newName3); //OurCollege

//Sol.3
let str = "ApnaCollege";
let newStr = str.slice(4).replace("l", "t");
console.log(newStr);