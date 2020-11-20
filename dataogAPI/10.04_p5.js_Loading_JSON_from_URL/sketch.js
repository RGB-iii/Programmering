var x = 0;

var spaceData;


function setup() {
  createCanvas(1000, 800);

}

function gotData(data) {
  spaceData = data;
}

function draw() {
  background(0);

  loadJSON('http://api.open-notify.org/iss-now.json', gotData, 'jsonp');

  if (spaceData) {
    fill(255);
    ellipse(500, 400, 250, 250);
    var positiony = spaceData.iss_position.longitude
    var positionx = spaceData.iss_position.latitude
    ellipse(positionx, positiony, 1000, 1000)
  }

  //jsonp_1605861510636_86892({"message": "success", "iss_position": {"latitude": "-40.8762", "longitude": "-30.4773"}, "timestamp": 1605861512})



  //if (spaceData) {
   // randomSeed(4);
   // for (var i = 0; i < spaceData.number; i++) {
     // fill(255);
      //ellipse(random(width), random(height), 16, 16);
    //}
  //}

  stroke(255);
  line(x, 0, x, height);
  x = x + 1;
  if (x > width) {
    x = 0;
  }
}
