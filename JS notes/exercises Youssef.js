var yourName="Joe";
var numberOfChildren=3;
var spouseName="Sarah";
var geographiclocation="Arizona";
var jobTitle="accountant";
var status='You will be '+   yourName+'and married to'+ spouseName + 'with' + numberOfChildren+ 'children '  + 'living in '+ geographiclocation +'as an '  + jobTitle ;

console.log(status)

//displaying age
var currentYear=2015;
var birthYear= 1983;
var firstAge = currentYear-birthYear;
var secondAge = parseInt(firstAge - 1, 10);
console.log(firstAge + " Or " + secondAge );

//snacks needed
var myAge = 32,
	maxAge = 99,
	estimate=3,
	snacks= 'You will need'+parseInt( (maxAge-myAge)*3 *365, 10) + 'snacks to survive until the age of 99';
console.log(snacks);

//Circle

var radius= 4;
var circumference = 'The circumference is ' + (2*3.14*radius);

var area= 'the area '+3.14* radius* radius;

console.log(area);
console.log(circumference);

//Temp
var celcius=45
var celciusToFahrenheit= 'the temp in F is '+(5*9) / (celcius+32);
var fahrenheit =55;
var fahrenheitToCelcius = 'the temp in C is '+(5/9) * (fahrenheit-32);

console.log(celciusToFahrenheit);
console.log(fahrenheitToCelcius);