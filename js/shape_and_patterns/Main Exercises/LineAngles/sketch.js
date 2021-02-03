let xPos = 250;
let yPos = 250;
let stepSize = 0.2;
let angle = 360;

function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
}


function draw() {

  let speed = map(mouseX,0,width, 2, 10)

  for (let i = 0; i < 10; i++)
  {
    stroke(255);
    //strokeWeight(10);
    point(xPos,yPos);

    xPos += cos(radians(angle)) * stepSize;
    yPos += sin(radians(angle)) * stepSize;

  }

  if ( yPos < 0){
    angle = floor(random(0,180));
    strokeWeight(random(0.2,4));
  }
  
  else if ( yPos > height){
    angle = floor(random(0,180)) + 180;
    strokeWeight(random(0.2,4));
  }
  
  else if ( xPos > width){
    angle = floor(random(0,180)) + 90;
    strokeWeight(random(0.2,4));
  }

  else if ( xPos < 0){
    angle = floor(random(0,180)) + 270;
    strokeWeight(random(0.2,4));
  }
}



