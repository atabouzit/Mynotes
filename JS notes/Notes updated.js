/**in JavaScript there are 5 different data types that can contain values:
//String
var lastName = "Johnson";

//Number 
var length = 16;  

//Boolean
true/false

//object
var x = {firstName:"John", lastName:"Doe"};

//Function.
var jump= function(){
		//funtion body
};

//OR
function jump(){
	//function body
}



// This is what a function looks like:

var bake = function (number) {
    var val = number * 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
bake(8);
Let's do a quick review!

Data types

strings (e.g. "dogs go woof!")
numbers (e.g. 4, 10)
booleans (e.g. false, 5 > 4)
Variables
We store data values in variables. We can bring back the values of these variables by typing the variable name.

Manipulating numbers & strings

comparisons (e.g. >, <=)
modulo (e.g. %)
string length (e.g. "Emily".length;)
substrings (e.g. "hi".substring(0, 1);)
console.log( ) 
Prints into the console whatever we put in the parentheses.



/*_______
_______________________________________________________*/
// how to declare a variable
var price1 = 5;
var price2 = 6;
var total = price1 + price2
//----------------------------------
var carName = "Volvo";//                                                                                                                                                                                                                                                                                                                                                                                            

/*______________________________________________________________*/


/*______________________________________________________________*/
//this is How does a function work.
// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)

/*function name(parameter1, parameter2, parameter3) {
    code to be executed
}**/
var foodDemand = function (food){
    console.log("I want to eat" + " " + food);
}
    
    foodDemand("Italian Cuisine");//this is how you call a function
	/*-------------------------------------------*/
	//Function.
var jump= function(){
		//funtion body
};
                                                      
//OR
function jump(){
	//function body
}
	
/*___________________________________              ___________________________*/
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};
timesTwo(5);
// Call timesTwo here!
var newNumber = timesTwo(3);
console.log(newNumber);

//timesTwo (4);

/*______________________________________________________________*/
// Functions, return and if / else

//var quarter = function(number);
function quarter(number){
return number/4;
}


if (quarter(8) % 2 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

/*______________________________________________________________*/
// simple IF statement:




var speed = 65;

// Complete the condition in the ()s on line 4
if (speed>80 ) {
	// Use console.log() to print "Slow down"
	console.log("Slow down");
} 
else {
	// Use console.log() to print "Drive safe"
console.log("Drive safe");

}
/*________________________________________*/
// Write your function below. 
// Don't forget to call your function!
var sleepCheck = function (numHours){
 if (numHours >= 8){
             return "You're getting plenty of sleep! Maybe even too much!";
     }
    
     else{
            return "Get some more shut eye!";
}
};
console.log(sleepCheck(10)); //this is how you call a function.
console.log(sleepCheck(5));//this is how you call a function.
console.log(sleepCheck(8));//this is how you call a function.
/*______________________________________________________________*/
// Below is the greeting function!
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Hello " + name);
};

// On line 11, call the greeting function!
greeting ("Hafid");// this is how we call a function
/*______________________________________________________________*/
// Nicely written function:??????
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
}

// Badly written function with syntax errors!

 var greeting= function(name){
     
 console.log("Hello"+" " + name);
 }
 greeting ("Hafid");

/*__________________________________________________________*/
//function with with two parameters
function perimeterBox(length, width){
return (length+length + width+ width);
}

perimeterBox (5,9);
/*__________________________________________________________*/
//Local JavaScript Variables
// code here can not use carName
//Local variables have local scope: They can only be accessed within the function.
function myFunction() {
    var carName = "Volvo";

    // code here can use carName

}

/*__________________________________________________________*/
//Global JavaScript Variables
//A global variable has global scope: All scripts and functions on a web page can access it.
var carName = " Volvo";

// code here can use carName

function myFunction() {

    // code here can use	carName 

}

/*__________________________________________________________*/

//how to declare an Object and an Array:

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy",6);

// another example to know what is the length of an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;

var junk =["Hafid","Tabouzit", 83, 32];{

console.log(junk);// this is how you print out the  properties of an array.
}

/*__________________________________________________________*/

//how to declare a for loop.
for (var i = 8 ; i < 120; i+=12) {// this loop will start at 8 and stop at 119 it 
//it is incremented by 12
	console.log(i);
}
for (var i = 8 ; i < 120; i++) {// this loop will start at 8 finish at119 
//it is incremented by 1
	console.log(i);
}
//----------------------------------------
// a decreasing loop by a number

for(i = 100; i>=1; i-=5){ // inside the parenthesis are statements
console.log(i);
}
// this loop will start at 100 and it will be decreasing by 5 until it reaches 1, it will stop at 5.
//or (var i = 10; i >= 0; i--) {
//	console.log(i);
//}
/*______________________________________________________________*/
// a for loop and an array
var cities = ["Melbourne", "Amman", "Helsinki", "NYC","Kenitra", "Marakech","mehdia Beach"];
// this is an array of cities 
for (var i = 0; i <cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
    
}

/*______________________________________________________________*/
// while Loop:The while loop loops through a block of code as long as a specified condition is true.
var i =0;
while (i < 10) {
    text += "The number is " + i;
    i++;
}
//----------------------------------------
//do/while loop:The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true,
// then it will repeat the loop as long as the condition is true.
do {
    text += "The number is " + i;
    i++;
}
while (i < 10);
//---------------------------------------------
// for each Loop
var sum = 0;
var obj = {
	prop1: 5, 
	prop2: 13, 
	prop3: 8
};

forEach (var item in obj) {
  sum += obj[item];
}

console.log(sum); // logs "26", which is 5+13+8
//-------------------------------------------------------

//switch statement



