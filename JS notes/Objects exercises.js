//The Recipe Card
var recipe = {
	title:"Couscous",
	serving:"4",
	ingredients:["semolina","vegies","meat"],
	
};
console.log(recipe.title);
console.log("serves: "+recipe.serving);
console.log("Ingredients : "+recipe.ingredients);

//The Reading List???
var books = [
  {title: "Maze", 
   author:"Billy",
  alreadyRead: yes},
   {title: "Humans", 
   author:"Joe",
  alreadyRead: no},
  {title: "NYC", 
   author:"Bicker",
  alreadyRead: yes},
  {title: "TheInput", 
   author:"sally",
  alreadyRead: yes},
];

for (var i = 0; i < books.length; i++) {
  var myBook = books[i];
  var bookInfo = myBook.title + 'by' + myBook.author;
  
  if (myBook.alreadyRead){
    console.log( "you already read "+ bookInfo);
  }
  else{
    console.log("you need to read this interesting book "+ bookInfo);
  }
}
//The Movie Database??
var movies = {
	title:"insideMan",
	duration:123,
	stars:["Denzel","balboa","jimmy"],
	
};
var movie = function (myMovies){
	console.log('the movie '+myMovies.title+' was ' + myMovies.duration + ' long ' + 'and the main charachters were '+myMovies.stars);
};
movie(movies);
