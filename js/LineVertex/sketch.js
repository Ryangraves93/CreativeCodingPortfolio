let radius = 150;
let numOfSegments = 16;

let points = [];
let curve;

function setup() {
  createCanvas(750, 750);
  background(0);
  let angle = radians(360 / numOfSegments);

  for (let i = 0; i < numOfSegments; i++) {
    let xPos = cos(angle * i) * radius;
    let yPos = sin(angle * i) * radius;

    points.push(createVector(xPos, yPos));
  }
  curve = new circle(points,numOfSegments);
}

function draw() {
  curve.render();
}




