var d = new Date();
var TorontoSunriseSunset;

function preload() {
	TorontoSunriseSunset = loadJSON("sunset-sunrise-Toronto.json");
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	var n = d.toTimeString();
	var sunset = TorontoSunriseSunset.results.sunset;
	var sunsetarray = sunset.split(":");

	var startSunset = new Date();
	startSunset.setHours(sunsetarray[0], sunsetarray[1], sunsetarray[2]);
}


function draw() {
		//if (TorontoSunriseSunset.results.sunset == true) {
			//background (20, 44, 84)
		//}


	fill(TorontoSunriseSunset.results.r, TorontoSunriseSunset.results.g, TorontoSunriseSunset.results.b);
	text(TorontoSunriseSunset.results.name, 100, 100);	
}