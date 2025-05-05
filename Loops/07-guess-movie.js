const favMovie = "Avator";
let guess = prompt("Guess my Favorite Movie!");

while((guess != favMovie) && (guess != "quit")) {
    console.log("Wrong");
    guess = prompt("Guess Again!");
}

if(guess === favMovie) {
    console.log("Congratulation!");
    alert("Congrats!")
}else{
    console.log("You quit the game");
}