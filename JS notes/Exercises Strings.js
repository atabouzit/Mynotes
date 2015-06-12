//DrEvil

var DrEvil = function( amount ){
	return amount+ ' dollars (pinky)';
};

console.log( DrEvil(10) );

//MixUp

var mixUp = function(string1,string2){
	return string1.concat(string2);// concatenation is to group two strings together
	// .concat The concat() method is used to join two or more strings.
}
console.log(mixUp("Hey ","you"));

//FixStart???
var fixStart = function(string){
	return string.replace(string,"***")
}
console.log(fixStart());

//Verbing????
var verbing = function(string){
	if (string<3){
		
		return string;
    }
  else if (string.slice(-3) == 'ing'){// I had to look it up but didnt understand it
        return  string+'ly';
    
  }
  else {
        return string+'ing';
  }
	
};
console.log(verbing("go"));

//Not Bad????
var notBad (string){
	
	return string.replace("not bad", "good");
}
console.log(notBad("This dinner is not that bad!"));








