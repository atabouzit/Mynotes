var topColorChoices = ["yelow","Blue","green","red","black","brown","white","gray","darkblue","redish"];

	for( var i = 0; i< topColorChoices.length; i++){
      if (i===0){
		console.log("My " + (i+1) +"st"  +" choice is " +  topColorChoices[i] );
    }   
      else if (i===1){
        console.log("My " + (i+1) +"nd"+" choice is " +  topColorChoices[i] );
      }
      else if (i===2){
        console.log("My " + (i+1) +"rd"+" choice is " +  topColorChoices[i] );
      }
      else {
        console.log("My " + (i+1) +"th"+" choice is " +  topColorChoices[i] );
      }
}
    //__________________________________________________________________________________________________________________
	
var topColorChoices = prompt("What IS YOUR FAVORITE COLOR?");
var topColorChoices = ["yelow","Blue","green","red","black","brown","white","gray","darkblue","redish"];
for( var i = 0; i< topColorChoices.length; i++){
      
				

	switch(i){
	  case 0:
		 
		console.log("My " + (i+1) +"st"  +" choice is " +  topColorChoices[i] );
		  
		break;
		
	  case 1:
	  
				console.log("My " + (i+1) +"nd"+" choice is " +  topColorChoices[i] );

		break;
	  
	  case 2:
		
		console.log("My " + (i+1) +"rd"+" choice is " +  topColorChoices[i] );
		   
		break;
	   
	  default:
		console.log("My " + (i+1) +"th"+" choice is " +  topColorChoices[i] );
	}
}
