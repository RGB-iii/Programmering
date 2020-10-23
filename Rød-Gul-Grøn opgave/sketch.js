function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(220);
  strokeWeight(3);
  stroke(0);



  for (var x = 0; x <= width; x += 100) {
    for (var y = 0; y <= height; y += 100) {
      let r = random(0, 1);
      if (r > 0.3) {
        fill(109, 67, 81)
      } else {
        fill(149, 44, 67)
      }
      rect(x + random(-2, 10), y + random(-2, 10), 100, 100);



    }
  }
}