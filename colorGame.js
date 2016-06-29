//alert("Colors");

// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click", function () {
	numberOfSquares = 3;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.background = "none";
		}
	}
});

hardButton.addEventListener("click", function () {
	numberOfSquares = 6;
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
		colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.background = "block";
	}
});





resetButton.addEventListener("click", function () {

	resetButton.textContent = "New Colors";
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	//genetrate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match new picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";

	//change color of squares
	for(var i = 0; i < squares.length; i++){
		//add new color to squares
		squares[i].style.background = colors[i];
	}

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){

	//add inital color to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "PLAY AGAIN?";

		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}

	});
}


function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each one to match given color
		if(colors[i]) {
			squares[i].style.background = color;
		} 
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var tmpArray = [];

	for (var i = 0; i < num; i++) {
		tmpArray[i] = randomColor();
	}
	return tmpArray;

}
	
function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	//rgb(0, 255, 255)
	return "rgb(" + red + ", " + green + ", " + blue + ")" ;
}


