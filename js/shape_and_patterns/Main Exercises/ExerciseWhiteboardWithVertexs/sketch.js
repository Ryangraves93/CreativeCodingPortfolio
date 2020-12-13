//Color circle variables
let numOfVertices = 24;
let numberOfSegments;
let stepAngle = 360 / numberOfSegments;
let radius = 160;

//Color selection variables
let c, c2 = [];
let colorArray = [];
let color1, color2;
var index = 0;
var numOfDrawVertices = 3;
let paintIndex;
let selectedColor;
let hueVarr;

let col;

let ComplimentaryColor = [];

let bColorsPicked = false;
let bVertexMode = false;
let bColorSelection = false;
let bClearColorWheel = false;
let bUsePrimaryColor = true;
let bIsPainting = false;

let vertexButtonText = 'Toggle Vertex Mode';

let vertexSlider;

var vertexArr = [];

function setup() {

    IntializeCanvas();
    InitializeUI();
    color1 = color(0,0,100,255);
    color2 = color(360, 100, 100,255);

    paintIndex = 0;

}

function draw() {
    if (!bColorSelection) {
        ColorWheel();
        textHUD();
    }
    else {
        DrawBottomCanvas();
    }
}


function IntializeCanvas()
{
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100);
    //setGradient();
    angleMode(DEGREES);
    
}
function InitializeUI()
{
    PaintButton = createButton('Paint');
    PaintButton.position(width / 2 - 20, height / 8 * 7);
    PaintButton.style('font-size', '24px');
    // PaintButton.hide();
    PaintButton.mousePressed(EnablePaintMode);

    // VertexModeButtonOn = createButton('Vertex Mode - On');
    // VertexModeButtonOn.position(380, 19);
    // VertexModeButtonOn.mousePressed(VertexMode);
    // VertexModeButtonOn.style('background-color', color1);
    // VertexModeButtonOn.style('font-size', '16px');
    // VertexModeButtonOn.hide();

    // VertexModeButtonOff = createButton('Vertex Mode - Off');
    // VertexModeButtonOff.position(380, 19);
    // VertexModeButtonOff.mousePressed(VertexMode);
    // VertexModeButtonOff.style('background-color', color1);
    // VertexModeButtonOff.style('font-size', '16px');
    // VertexModeButtonOff.hide();

    BackButton = createButton('Clear');
    BackButton.position(width / 2 - 20, 60);
    BackButton.mousePressed(Back);
    BackButton.hide();

    vertexSlider = createSlider(10, 18);
    vertexSlider.position(width / 2 - 30, height / 8 * 7 + 30);
    vertexSlider.style('width', '80px');
    vertexSlider.changed(RedrawColorWheel)
    NumberOfVertices = vertexSlider.value();
}

function RedrawColorWheel() {
    clear();
    setGradient(gc1, gc2);
    ColorSelection();
}

//Toggles vertex mode which paints a triangle with three points chosen by the user
function VertexMode() {
    if (bVertexMode) {
        bVertexMode = false;
        VertexModeButtonOff.show();
        VertexModeButtonOn.hide();
    }
    else {
        bVertexMode = true;
        VertexModeButtonOn.show();
        VertexModeButtonOff.hide();
    }
}


function Back() {
    clear();
    setGradient(gc1, gc2);
    bColorSelection = false;
    BackButton.hide();
    PaintButton.show();
    VertexModeButtonOn.hide();
    VertexModeButtonOff.hide();
    vertexSlider.show();
}

function ColorSelected() {
    bColorSelection = true;
    clear();
}
//Used to chose a color from the color wheel. If the function is called when vertex mode is true
//and the mouse pos is on the bottom canvas, will add the mouse positions to the vertex
//array and then call the DrawVertexShape function
function mouseClicked() {
    if (!bColorSelection) {
        if ((mouseX > 50 && mouseX < width - 50) && (mouseY > 50 && mouseY < height - 50)) {
            c = get(mouseX, mouseY);
            ColorSelection();
        }
    }

    else if (mouseY > height / 4 && bVertexMode) {
        vertexArr.push(mouseX, mouseY);
        ellipse(mouseX, mouseY, 2, 2);
        index++;
        console.log(index);
        if (index == numOfDrawVertices) {
            DrawVertexShape();
        }
    }
}

//Clears the canvas, function was needed for button pressed
function EnablePaintMode() {
    if (bColorsPicked)
    {
        bVertexMode = true;
        bColorSelection = true;
        clear();
        vertexSlider.hide();
        PaintButton.hide();
        ColorSelection();
        BackButton.show();
    }
}

//Is called once the vertex array has 3 sets of vertices, then loops through the array drawing a 
//vertex at each points. Then resets the index and resets the array for continous use.
function DrawVertexShape() {
    bVertexMode = true;
    push();
    noStroke();
    if (bVertexMode && mouseY > height / 4) {

        if (bUsePrimaryColor) {
            fill(color(`rgba(${c.map((dat) => dat)})`));
        }
        else {
            selectedColor = color(`rgba(${c.map((dat) => dat)})`);
            hueVarr = Math.round(hue(selectedColor));
            fill(hueVarr > 180 ? hueVarr / 2 : hueVarr * 2, 100, 100)
        }

        beginShape();
        for (let i = 0; i <= numOfDrawVertices *2; i += 2) {
            vertex(vertexArr[i], vertexArr[i + 1]);
            console.log(vertexArr[i + 1]);
        }

        endShape(CLOSE);
        pop();
        index = 0;
        vertexArr = [];

        if (bUsePrimaryColor) {
            bUsePrimaryColor = false;
        }
        else {
            bUsePrimaryColor = true;
        }
    }
}

//Draws a rectangle in the lower half as the canvas for the user to draw on
function DrawBottomCanvas() {
    line(0, height / 4, 500, height / 4);
    line(0, height, 0, height / 4)
    line(500, height, 495, height / 4)
    line(0, 500, 495, 495)
}

// MouseDragged is used to draw on the canvas. MouseDragged calls the function every second while 
//the mouse is held down as apposed to once which is why MousePressed wasn't used
function mouseDragged() {

    if (bColorSelection && !bVertexMode) {
        if (mouseY > height / 4) {
            Paint();
        }
    }
}

function Paint() {
    push();
    noStroke();

    if (paintIndex < 50) {
        fill(color(`rgba(${c.map((dat) => dat)})`));
    }
    else {
        selectedColor = color(`rgba(${c.map((dat) => dat)})`);
        hueVarr = Math.round(hue(selectedColor));
        fill(hueVarr > 180 ? hueVarr / 2 : hueVarr * 2, 100, 100)
    }

    if (paintIndex == 100) {
        paintIndex = 0;
    }

    paintIndex++;
    ellipse(mouseX, mouseY, 10, 10);
    pop();
}

//Color wheel so the user can select a color to be used for drawing
function ColorWheel() {
    stepAngle = 360 / numberOfSegments;

    push();
    translate(width / 2, height / 2);
    rotate(45);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);

    for (let i = 0; i <= 360; i += stepAngle) {
        // textSize(12);
        // fill(0, 102, 153);
        // text(i,((radius + 25) * cos(i)),((radius + 25) * sin(i)));

        let x = (radius * cos(i));
        let y = (radius * sin(i));
        fill(i, 100 , 100);

        colorArray.push(i);
        vertex(x, y);
    }

    endShape(CLOSE);
    pop();
}

//Draws text to the screen
function textHUD() {
    numberOfSegments = vertexSlider.value();
    push();
    fill(100,0,100);
    textSize(27);
    text("Vertex Painter", 10, height / 20 , 200, 25);
    

    textSize(14);
    text("Select a primary color and the select paint to begin", 10 , height / 10 , 500, 20);

    fill(50);
    textSize(12);
    text("Number of segments", width / 2 - 150, height / 8 * 7 + 25, 150, 25);
    fill(255, 255, 255, 51);

    pop();
}

//Used to draw the rectangle to display the color value selected by the user
function ColorSelection() {

    selectedColor = color(`rgba(${c.map((dat) => dat)})`);
    hueVarr = Math.round(hue(selectedColor));

    //h % 180
    fill(color(`rgba(${c.map((dat) => dat)})`));
    push();
    fill(100,0,100);
    textSize(12);
    text("Primary Secondary", width/4 * 3, height/20, 120, 25);
    fill(255, 255, 255, 51);
    pop();
    rect(width/4 * 3, height/10, 50, 50);

    fill(hueVarr > 180 ? hueVarr / 2 : hueVarr * 2, 100, 100)
    rect(width/4 * 3 + 50, height/10, 50, 50);

    bColorsPicked = true;
    //PaintButton.show();
}