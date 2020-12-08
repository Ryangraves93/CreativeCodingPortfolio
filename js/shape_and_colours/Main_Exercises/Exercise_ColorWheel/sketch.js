let numOfSegments,
  stepAngle,
  radius = 150;

/**
 * Setup the canvas and add a background
 */
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(255, 255, 255);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

/**
 * Creates multiple vertex's using a for loop
 */
function draw() {
  numOfSegments = map(mouseX, 0, width, 10, 40);
  stepAngle = 360 / numOfSegments;

  push();
  translate(250, 250);
  fill(200, 500, 100);

  /**
   * Create the triangle fan
   */
  beginShape(TRIANGLE_FAN);

  /**
   * Center point to the triangle fan
   */
  vertex(0, 0);

  for (let i = 0; i <= 360; i = i + stepAngle) {
    /**
     * Calculate vx & vy using cos & sin
     */
    const vx = radius * cos(i);
    const vy = radius * sin(i);

    fill(i, 100, 100);
    vertex(vx, vy);
  }
  /**
   * End the triangle fan
   */
  endShape();
  pop();
}