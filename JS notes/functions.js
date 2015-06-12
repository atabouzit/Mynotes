/*Function syntax
A function takes in inputs, does something with them, and produces an output.

Here's an example of a function:

var sayHello = function(name) {
    console.log('Hello ' + name);
};
1-First we declare a function using var, and then give it a name sayHello. The name should begin with a 
lowercase letter and the convention is to use lowerCamelCase where each word (except the first) begins with a capital letter.
2-Then we use the function keyword to tell the computer that you are making a function
3-The code in the parentheses is called a parameter. It's a place holder word that we give a specific value when we call the function. Click "Stuck? Get a hint!" for more.
4-Then write your block of reusable code between { }. Every line of code in this block must end with a ;.
You can run this code by "calling" the function, like this:

sayHello("Emily");
Calling this function will print out Hello Emily.

// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.*/

var greeting = function (name) {// greeting is the name of the function, 
//3-The code in the parentheses is called a parameter. It's a placeholder word that we give a specific value when we call the function.

    console.log("Great to see you," + " " + name);//it is  reusable code between { }. Every line of code in this block must end with a ;.

};

// On line 11, call the greeting function!
greeting("Hafid");//Calling this function will print out Hafid.

//CONCLUSION
//The var keyword declares a variable named functionName.
//The keyword function tells the computer that functionName is a function and not something else.
//Parameters go in the parentheses. The computer will look out for it in the code block.
//The code block is the reusable code that is between the curly brackets { }. Each line of code inside { } must end with a semi-colon.
//The entire function ends with a semi-colon.
//To use the function, we call the function by just typing the function's name, and putting a parameter value inside parentheses after it. 
//The computer will run the reusable code with the specific parameter value substituted into the code.

//-------------------------------------------------------------------------------------------------------------------------------------------------
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};
timesTwo(4);
// Call timesTwo here!
var newNumber = timesTwo(34)
console.log(newNumber);

In our example we have a function called timesTwo() that takes in a number and returns the number multiplied by two.

On line 7, after the equals sign, call the function timesTwo with any parameter you want
Line 8 prints out newNumber. Notice how the value we return from timesTwo() is automatically assigned into newNumber.
//________________________________________________________________________________________________
// functions can be written also as :
function toCelsius(fahrenheit) { //a simple function that converts from Celsius to Fahrenheit
    return (5/9) * (fahrenheit-32);// this what should be cooking as a code if I can say that
}

toCelsius(110);// here when we call the function toCelcius and assign it a fahrenheit value
//____________________________________________________________________

//function toCelsius(fahrenheit) { //a simple function that converts from Celsius to Fahrenheit
var toCelcius=function(fahrenheit){
    return (5/9) * (fahrenheit-32);// this what should be cooking as a code if I can say that
}

toCelsius(110);// here when we call the function toCelcius and 
//______________________________________________________________

