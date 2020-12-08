//Color circle variables
var stepX;
var stepY;

let Squares = [];
let Square;

function setup() {
    IntializeCanvas();
    IntializeSquares();
}

function draw() {
    background(0);
    DrawSquares();
}

function IntializeCanvas() {
    createCanvas(500, 500);
    paintIndex = 0;
    colorMode(HSB, width, height, 100);
    rectMode(CENTER);
    stepX = width/10;
    stepY = height/10;

    for (let i = 0; i < 100; i++)
    {
        Squares.push(new RotatingSquare);
    }
}

function IntializeSquares()
{
    for (let j = 0; j < 10; j ++) {
        for (let i = 0; i < 10; i++){
        Squares.push(new RotatingSquare(stepX * i,stepY * j,stepX,stepY));       
         }
    }
}

function DrawSquares()
{
    Squares.forEach(ele => {
        ele.render();
    });
}



