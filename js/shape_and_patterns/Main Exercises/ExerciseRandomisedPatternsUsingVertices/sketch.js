//Color circle variables
var stepX;
var stepY;

let Squares = [];
let Square;
let i;
var noOfLines;

let drawRate;
let pointOfRotationX;
let pointOfRotationY;

let bConsistent;
let it = 0;
var randRange;
let patternRandRange;
let backgroundColor;

function setup() {
    IntializeCanvas();
    GenerateValues();
    IntializeSquares();
}

function draw() {
    DrawSquares();
}

function GenerateValues() {
    bConsistent = round(random(0, 1));
    stepX = width / 10;
    stepY = height / 10;
    patternRandRange = random(2, 15);
    pointOfRotationX = width / 2;
    pointOfRotationY = height / 2;
    drawRate = 3;
    
}
function IntializeCanvas() {
    createCanvas(500, 500);
    colorMode(HSB, width, height, 100);
    backgroundColor = random(0,360);
    background(backgroundColor, 100, 100);
    rectMode(CENTER);

}

function IntializeSquares() {
    for (let i = 0; i < 100; i++) {
        Squares.push(new RotatingSquare);
    }
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            bConsistent ? randRange = patternRandRange : randRange = random(1, 15);
            Squares.push(new RotatingSquare(stepX * i, stepY * j, stepX, stepY, i, randRange));
        }
    }
}

function DrawSquares() {
    Squares.forEach(ele => {
        ele.render(pointOfRotationX, pointOfRotationY);
    });
    if (it < 180) {
        pointOfRotationX += drawRate;
        pointOfRotationY += drawRate;
    }
    it++;
}



