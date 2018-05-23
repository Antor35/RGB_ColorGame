/// Select part
var colorDisplay = document.getElementById("colorDisplay");
var square = document.querySelectorAll(".square");
var verdict = document.querySelector("#verdict");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

var cnt = 6;

var colors = generateColor(cnt);
var pickedColor = pickColor();

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	cnt = 3;
	colors = generateColor(cnt);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<square.length; i++){
		if(colors[i]){
			square[i].style.background = colors[i];
		}else{
			square[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	cnt = 6;
	colors = generateColor(cnt);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<square.length; i++){
			square[i].style.background = colors[i];
			square[i].style.display = "block";
	}
});



 
resetButton.addEventListener("click", function(){
	 colors = generateColor(cnt);
	 pickedColor = pickColor();
	 colorDisplay.textContent = pickedColor;
	 h1.style.background = "steelblue";
	 verdict.textContent = "";
	 this.textContent = "New Colors";
	 //console.log(pickedColor);
	 for(var i = 0; i <square.length; i++){
	  square[i].style.background = colors[i];
	 }
});
/// manipulate Part


 
colorDisplay.textContent = pickedColor;

for(var i = 0; i <square.length; i++){
	square[i].style.background = colors[i];
	
	square[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(pickedColor === clickedColor){
			verdict.textContent= "congratulation!";
			verdict.classList.add("displayresult");
			resetButton.textContent = "Play Again";
			h1.style.background = clickedColor;
			changeColor(pickedColor);
		}else{
			verdict.textContent = "Try Again";
			//verdict.classList.add("displayresult");
			this.style.background = "#232323";
		}
	});
}

function changeColor(color){
	for(var i = 0; i < square.length; i++){
		square[i].style.background = color;
	}
}

function pickColor(){
	var index = Math.floor(Math.random()*colors.length);
	return colors[index];
}

function generateColor(num){
	var arr = [];
	for(var i = 0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}