/////////////////////////////////////////////////////////////////////
//																  //
//					Trivia Game									  //
//																  //
///////////////////////////////////////////////////////////////////

////////////////////////////
//						  //
//	  Variables needed.   //
//						  //
////////////////////////////





$(document).ready(function(){

var indexQuestion;
var correct = 0;
var wrong = 0;



// Create an object to store the questions of the game
var trivia = [
{
	"question" :"Who directed Star Wars movies?",
	"images"  :"assets/images/georgeLucas.jpg",
	"choices" : ["Jules Verne", "Charles Dickens", "William Shakespeare","George Lucas"],
	"correct" : "George Lucas",
},
{
	"question" : "Who is Luke Skywalker's father?",
	"images": "assets/images/anakiSkywalker.jpg",
	"choices" : ["Anakin Skywalker", "Obi wan Kenobi", "Yoda", "The Emperor"],
	"correct" : "Anakin Skywalker",
},
{
	"question" : "What Planet do the wookiees came from?",
	"images" : "assets/images/kashyyyk.jpg",
	"choices": ["Tatooine", "Bespin","Naboo", "Kashyyyk"],
	"correct": "Kashyyyk",
},
{
	"question" : "What's Darth Vader real name?",
	"images" : "assets/images/anakiSkywalker.jpg",
	"choices": ["Obi-Wan Kenobi", "Anakin Skywalker", "Luke Skywalker", "Han Solo"],
	"correct": "Anakin Skywalker",
},
{
	"question" : "What's the color of Luke's Lightsaber in episode VI?",
	"images": 	"assets/images/lukeGreen.jpg",
	"choices" : ["red", "blue", "green", "purple"],
	"correct" : "green",
},
{
	"question" : "Who killed the Emperor?",
	"images" : "assets/images/darthVader",
	"choices" : ["Luke", "Palpatine", "Voldemort", "Darth Vader"],
	"correct" : "Darth Vader",
},
{
	"question" : "When was The first Star Wars movie released?",
	"images": "assets/images/1977.jpg",
	"choices": ["1999", "1993", "1977", "1968"],
	"correct": "1977",
},
{
	"question": "What's the main character in Star Wars The Force Awakens?",
	"images": "assets/images/rey.jpg",
	"choices": ["Han Solo", "Rey", "BB-8", "Leia"],
	"correct" : "Rey",
},

{
	"question" : "What's the name of Han Solo's son?",
	"images" : "assets/images/benSolo.png",
	"choices" : ["Antonio Solo", "Lucas Solo", "Ben Solo", "Anakin Solo"],
	"correct": "Ben Solo",
},

{
	"question" : "Who stole the Death Star plans",
	"images" : "assets/images/rogueOne",
	"choices" : ["The Rebellion", "Leia and R2-D2", "Rogue One", "Luke Skywalker"],
	"correct" : "Rogue One",
}
];



gameInit(trivia);

});



// Create a nested object to store the answers of the game


// Create a function to start the game
function gameInit(trivia)
{
	var correct=0;
	var wrong=0;
	var div = $("<div>", {id: "starGame"});
	div.append("<button>Start Game</button>");
	$("#question").append(div);
	$("button").on("click", function()
	{
		$("#starGame").hide();
		indexQuestion = Math.floor(Math.random() * 10);
		console.log(indexQuestion);
		
		console.log(trivia[indexQuestion].question);
		console.log(trivia[indexQuestion].choices);
		console.log(trivia[indexQuestion].correct);

		displayQuestion(trivia);
	});

	
}

function showAnswer()
{

}

function displayQuestion(trivia)
{
	// Create a new div to insert the question 
	var div = $("<div>");
	div.append("<h2>" + trivia[indexQuestion].question + "</h2>");
		for(var i= 0; i < 4; i++)
		{
			div.append("<button>" + trivia[indexQuestion].choices[i] + "</button> <br>");
		
		}

	$("#question").html(div);
	// on click function to choose the right answer 
	$("button").on("click", function()
	{
		if($(this).text() === trivia[indexQuestion].correct)
		{
			var image = $("#img");
			var currentImg = $("<img src='" + trivia[indexQuestion].images + "'/>");
			image.append(currentImg);
			alert("you got it");
			//correct++;
			nextQuestion(trivia);
		}
		else
		{
			//wrong++;
			alert("try again");
		}
	});

}

function nextQuestion(trivia)
{
// Pick a random index to select the question
$("#img").hide();
indexQuestion = Math.floor(Math.random() * 10);
console.log(indexQuestion);

console.log(trivia[indexQuestion].question);
console.log(trivia[indexQuestion].choices);

displayQuestion(trivia);
}
// Get the current and display it to the screen



// Create a function to choose a random question and display to the user



// Create a function to display the timer 



// Create the function to determine if the answer is correct or wrong

