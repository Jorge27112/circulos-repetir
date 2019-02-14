function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  for (var x = 25; x <= 425; x++); {
    ellipse(25 + x++, 25, 25, 25);
  }
}
