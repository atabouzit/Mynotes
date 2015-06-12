// Check if the user is ready to play!
var age=prompt("what's your age");// this prompt command will generate a pop up into the screen asking the user to enter a value
confirm("are you ready to play");//the confirm command will generate a pop up into the user so thy can either confirn or deny
if(age <13){
    console.log("you are allowed to play bbut I take no responsibility");
}
else{
    console.log("Go right ahead and enjoy the game");
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
var userAnswer= prompt("Do you want to race Bieber on stage?");
if(userAnswer==="yes"){
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}
var feedback= prompt("Rate my game out of 10");
if(feedback>8){
    console.log("Thank you! We should race at the next concert!");
}
else{
    console.log("I'll keep practicing coding and racing.");
}