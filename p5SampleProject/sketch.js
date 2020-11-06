function setup() {
	createCanvas(windowWidth, windowHeight);
	let x = 100;
}
var date = new Date();
var timestamp = date.getTime();
var test = date / 1000;

function draw() {
	fill(200, 0, 150);
	rect(50, 50, 100, 100);

	text(timestamp, 200, 100);
	text(test, 200, 300);
	//test af branch
}