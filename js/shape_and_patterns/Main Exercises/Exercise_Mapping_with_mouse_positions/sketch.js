//Color circle variables
let numOfVertices = 24;
let numberOfSegments = 16;
let stepAngle = 360 / numberOfSegments;
let radius = 160;
let colorArray = [];


function setup() {
    IntializeCanvas();
}


function draw() {
    clear();
    ColorWheel();
    radius = map(mouseX,0,width,25,75);
}


function IntializeCanvas() {
    createCanvas(500, 500);
    paintIndex = 0;
    colorMode(HSB, 360, 100, 100);
    angleMode(RADIANS);
}

//Map mouseX & mouseY to the radius and stroke weight, confine within
//canvas. Create a vertex at origin and then multiple radius by cos
// and sin of the angle.
function ColorWheel() {
    stepAngle = TAU / numberOfSegments;
    push();
    translate(width / 2, height / 2);
    rotate(45);

    radius = map(mouseX,0,width,-250,250);
    mouseStroke = map(mouseY,0,height,0,25);
    strokeWeight(mouseStroke);

     for (let i = 0; i <= TAU; i += stepAngle) {
        beginShape(LINES);
        vertex(0, 0);
         let x = (radius * cos(i));
         let y = (radius * sin(i));
         vertex(x, y);
         endShape(CLOSE);
     }   
    pop();
}


