//Homework: The Word Guesser
//var userInput = prompt("enter your Guess");
var wordLetters = [ "H", "A", "F", "I", "D" ];
var guessedLetters = [ "_", "_", "_", "_" ];

var userInput = function(letter){
	var goodGuess = false;
	var badGuess = false;
	for(i=0; i<wordLetters.length; i++){
		 
		if(wordLetters[i]===letter);{
			guessedLetters[i] = letter;
            goodGuess = true;
			
		}
		if(wordLetters[i]==="_"){
			badGuess = true;
		}
	}
	if (goodGuess) {
        console.log("you got it");
        console.log(guessedLetters.join(''));
        if (!badGuess) {
            console.log('YOU WON!');
        } 
    } else {
        console.log('guess again');
    }
	
};

userInput('H');
userInput('I');
userInput('F');
userInput('D');
userInput('A');


/*userInput( "T" );
//Requiremenets
var correctLetters = [ "H", "A", "F", "I", "D" ];
var guessedLetters = [ "_", "_", "_", "_" ];
function userInput( letter ){
    ....
}
userInput( "T" );
"Sorry, letter doesnt exist in our secret word"
userInput( "F" );
"__F__"
var guessedLetters = [ "_", "_", "F", "_" ];
userInput( "F" );
"Houraah! Letter does exist in our secret word"
"__F__"
userInput( "D" );
"Houraah! Letter does exist in our secret word"
"__F_D"
*/