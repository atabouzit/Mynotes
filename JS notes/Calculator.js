var squareNumber = function(number){
	return 'The result of squaring the number  '+(number) +' is '+(number*number);
};
	console.log(squareNumber(3));

var halfNumber = function(number){
	return 'Half of '+ (number)+ ' is ' + (number/2);
	
};
	console.log(halfNumber(5));

var percentOf = function(number1, number2){
	return 'the first number' + number1+ ' is '+(number1/number2)*(100)+ ' % of ' +number2;
	
};
	console.log(percentOf(5,10));
	

var areaOfCircle = function(radius){
	return 'The area for a circle with radius '+ radius + ' is '+ ( 3.14 * radius * radius);
	
};
	console.log(areaOfCircle(5));

	
	
function calculator(number) {//?????
  return{
     half: halfNumber(number);
	 square: squareNumber(half);
	 area : areaOfCircle(square);
	 percentage: percentOf(square,area);
  };
};
console.log(calculator(5));
