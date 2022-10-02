var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");

var  pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColor(6);
	// pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
  // add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
  // add click listeners to squares
 	squares[i].addEventListener("click", function(){
  //grab color to clickedColor
  	var clickedColor = this.style.backgroundColor;
  //compare color to pickedColor
  	if(clickedColor === pickedColor){
  		messageDisplay.textContent = "Correct";
  		resetButton.textContent = "Play Again?";
  		// calling changeColors to change all squares color to correctColor
  		changeColors(clickedColor);
  		h1.style.backgroundColor = clickedColor;
  	}
  	else { // change color of square block to backGround color if wrong
  		this.style.backgroundColor = "#232323";
  		// change each color to match given color
  		messageDisplay.textContent = "Try Again";
  		
  	}

 	})
}
 	function changeColors(color){
 		// loop through all squares
 		for(var i=0; i<squares.length; i++){
 			// change each color to match given color
 			squares[i].style.backgroundColor = color;
 		}
 	}


function pickColor(){
 		// generatr random index fpr colors array
 		
 		var x = Math.floor(Math.random() * colors.length);
 		return colors[x];
 	}

function generateRandomColor(num){
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i<num; i++){
		// get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r +", "+ g +", "+ b + ")";
}