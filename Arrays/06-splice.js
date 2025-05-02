let colors = ["red", "yellow", "blue", "green", "pink", "white", "purpule"];
console.log(colors);

let splice1 = colors.splice(3);
console.log(splice1);
console.log(colors);

let splice2 = colors.splice(1,3);
colors.push("orange","black");
console.log(splice2);
console.log(colors);

let splice3 = colors.splice(0,0, "gulabi" , "green");
console.log(splice3);
console.log(colors);