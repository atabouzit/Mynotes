if else statement:

var speed = 65;

if (speed>80 ) {
	
	console.log("Slow down");
} 
else {
	
console.log("Drive safe");

}
/*You can put anything as a comment between slsh and sla*/
/****________________________________________________________________________***/ 
//how to declare a function:

var bake = function (number) {
    var val = number * 3;
    console.log(val);
};
_________________________________________________________________________
//how to call a basic function:

var foodDemand = function (food){
    console.log("I want to eat" + " " + food);
    }
    
    foodDemand("Italian Cuisine");

__________________________________________________________________________

basic for Loop:
for (var i = 5; i < 11; i = i + 1){
	console.log(i);
}
--------------------------------------
for (var i = 4; i < 24; i = i + 1) {
	console.log(i);
}
---------------------------------------

for(i = 100; i>=1; i-=5){
console.log(i);
}
_____________________________________________________________________________
Arrays:

var junk =["Hafid","Tabouzit", 83, 32];{

console.log(junk);
}

_______________________________________________________________________________
Loops and Arrays:

var cities = ["Melbourne", "Amman", "Helsinki", "NYC","Kenitra", "Marakech","mehdia Beach"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

-----------------------------------------------
var names= ["Mohamed","Noura","Houda","Abdelhafid","Tbaouzit"];
for (var i =0; i<names.length ; i++){
    console.log("I know someone called " + names[i]);
}


___________________________________________________________________________

Literal notation creates a single object. 
Literal notation uses curly brackets { } and the object's default properties are defined within 
the brackets using property:value notation.
Constructor notation involves defining an object constructor.
And like defining a function, we use the function keyword. 
You can think of this constructor as a "template" from which you can create multiple objects. 
To create a new object from a constructor, we use the new keyword.
_______________________________________________________________________________________________
creating a simple object
var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};
___________________________________________________________
typeof is used to determine what kind of variable it is:
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj ); // should print "object"
console.log(typeof aNumber ); // should print "number"
console.log(typeof aString  ); // should print "string"
_____________________________________________________________
How to print properties from an Object:

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var property in nyc) {
    console.log(property);
}
_________________________________________________________________________
print out values of properties of an object
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};



for (var x in nyc) {
    console.log(nyc[x]);
}
_________________________________________________________________________
Methods in Objects:
var buddy = new Dog("Golden Retriever");
buddy.bark = function() // this is the method
{
  console.log("Woof");
};
____________________________________________________________________________
PROTOTYPE METHODE ALSO COVERS HOW TO MAKE A CLASS AND A METHOD 
you want to add a method to a class such that all members of the class can use it, 
we use the following syntax to extend the prototype: 

className.prototype.newMethod =

function() {
statements;
};
exe:
function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();
_____________________________________________________________________________________________
