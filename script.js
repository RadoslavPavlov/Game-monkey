let canvas = document.getElementById("gameCanvas");
let output = document.getElementById("gameText");

let canvasHeight = document.getElementById("canvasHeight").valueAsNumber;
let canvasWidth = document.getElementById("canvasWidth").valueAsNumber;
let sqsize = 50;
let broqch = 0;
canvas.height = canvasHeight * sqsize;
canvas.width = canvasWidth * sqsize;

let context = canvas.getContext("2d");


let herox = 2;
let heroy = 3;
let img = new Image();
img.src = "hero.png";

let bananx = 4;
let banany = 4;
let img1 = new Image();
img1.src = "banan.jpg";

function drawMapAndHero() {
	context.fillStyle = "white";
	context.fillRect(0,0, canvasWidth * sqsize, canvasHeight* sqsize);

	context.drawImage(img, herox * sqsize, heroy * sqsize, sqsize, sqsize);
	context.drawImage(img1, bananx * sqsize, banany * sqsize, sqsize, sqsize);

	for (let i = 0; i < canvasWidth; i++) {
		for (let j = 0; j < canvasHeight; j++) {
			context.strokeRect(i * sqsize, j * sqsize, sqsize, sqsize);
			}
	}
}
drawMapAndHero();


canvas.onclick = function(e) {

	let mousePosX = e.x - e.originalTarget.offsetLeft;
	let mousePosY = e.y - e.originalTarget.offsetTop;
	herox = Math.floor(mousePosX / sqsize);
	heroy = Math.floor(mousePosY / sqsize);
	
	drawMapAndHero();
	if (herox === bananx && heroy === banany) {
		broqch++;
		output.innerText = broqch;
		bananx = Math.floor(Math.random() * canvasWidth);
		banany = Math.floor(Math.random() * canvasHeight);		
		drawMapAndHero();
		if (broqch == 10) {
			output.innerText = "Game over";
			
		}
		
	
	}
}
function moveUp() {
	heroy --;
	drawMapAndHero();
	if (herox === bananx && heroy === banany) {
		broqch++;
		output.innerText = broqch;
		bananx = Math.floor(Math.random() * canvasWidth);
		banany = Math.floor(Math.random() * canvasHeight);
		drawMapAndHero();
		if (broqch == 10) {
			output.innerText = "Game over";
		}	
	}
	
}
function moveDown() {
	heroy ++;
	drawMapAndHero();
	if (herox === bananx && heroy === banany) {
		broqch++;
		output.innerText = broqch;
		bananx = Math.floor(Math.random() * canvasWidth);
		banany = Math.floor(Math.random() * canvasHeight);
		
		drawMapAndHero();
		if (broqch == 10) {
			output.innerText = "Game over";
		}	
	
	}
}
function moveLeft() {
	herox --;
	drawMapAndHero();
	if (herox === bananx && heroy === banany) {
		broqch++;
		output.innerText = broqch;
		bananx = Math.floor(Math.random() * canvasWidth);
		banany = Math.floor(Math.random() * canvasHeight);
		
		drawMapAndHero();
		if (broqch == 10) {
			output.innerText = "Game over";
		}	
	
	}

}
function moveRight() {
	herox ++;
	drawMapAndHero();
	if (herox === bananx && heroy === banany) {
		broqch++;
		output.innerText = broqch;
		bananx = Math.floor(Math.random() * canvasWidth);
		banany = Math.floor(Math.random() * canvasHeight);
		
		drawMapAndHero();
		if (broqch == 10) {
			output.innerText = "Game over";
		}	
	
	}
}

	

document.onkeypress = function(e) {
	let key = e.key;
	switch(key) {
		case "w": moveUp(); break;
		case "a": moveLeft(); break;
		case "s": moveDown(); break;
		case "d": moveRight(); break;
	}
}