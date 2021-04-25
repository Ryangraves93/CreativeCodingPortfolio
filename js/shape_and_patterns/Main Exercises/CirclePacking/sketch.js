let circles = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  checkNumberOfCircles();
  determineDistance()
}

function isValid() {
  let x = random(width);
  let y = random(height);

  let valid = true;
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    let distance = dist(x, y, circle.x, circle.y);
    if (distance < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
}

function determineDistance(){
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (let j = 0; j < circles.length; j++) {
          let circleToCheck = circles[j];
          if (circle !== circleToCheck) {
            let distance = dist(circle.x, circle.y, circleToCheck.x, circleToCheck.y);
            let distanceToCheck = circle.r + circleToCheck.r;

            if (distance  < distanceToCheck) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.show();
    circle.grow();
  }
}

function checkNumberOfCircles()
{
  let total = 2;
  let count = 0;
  let attempts = 0;

  while (count < total) {

    let circle = isValid();

    if (circle !== null) {

      circles.push(circle);
      count++;
    }
    attempts++;
    if (attempts > 100) {
      break;
    }
  }
}






