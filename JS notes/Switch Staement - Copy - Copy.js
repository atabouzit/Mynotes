var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
//______________________________________________________________________________________

//switch statement that I made up myself

var grades= prompt("what is your grade");

switch(grades){
        case'A':
        console.log("you are good");
        break;
        case'B':
        console.log("you could do better ");
        break;
        case'C':
        console.log("Dude you gotta study more");
        break;
        default:
        console.log("are you sure that is a real grade");
}