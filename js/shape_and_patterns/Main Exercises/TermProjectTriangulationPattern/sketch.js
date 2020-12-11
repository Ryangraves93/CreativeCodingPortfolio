/* Variables

RowPoints - 2D array to store vectors which serve as points to form the triangles
ColorArray - 2D array to hold different pallettes
ColorPallette - Index which color pallette to use
*/

let RowPoints = [];
let colorArray = [[75,100,1,160,280,350],
                 [270,175,340,45,145,350],
                 [1,50,288,88,182,352],
                 [12,25,144,126,44,91]
                ];
let colorPalletteID;

//Creates the index for the colorPallete, initialize the canvas and generate the vectors
function setup() {
    IntializeCanvas();
    GeneratePoints();
}

//Generate a 2D array of vectors that are serve as the points to draw a triangle, then pass these points
//into the DrawTriangles function which creates 3 triangles out of one by joining them at the midpoint. 
function GeneratePoints() {
    let modifier = 20;
    let scaler = random(1.5,2.0);
    for (let j = 0; j * modifier < width; j++) {
        RowPoints[j] = []
        for (let i = 0; i * modifier < height; i++) {
            let offset = random(0,20);
            if (j % 2 == 0) {
                RowPoints[j].push(createVector(((i * scaler)* modifier + offset), (j * scaler) * modifier));
            }
            else {
                RowPoints[j].push(createVector((i * scaler)* modifier, (j * scaler)* modifier));
            }
        }
    }
    push();
    for (let i = 0; i < 2; i++) {
        for (let i = 0; i < RowPoints.length - 1; i++) {
            for (let j = 0; j < RowPoints.length - 1; j++) {
                if (i % 2 == 0)
                {
                    DrawTriangles(RowPoints[i + 1][j], RowPoints[i][j], RowPoints[i][j + 1])
                    DrawTriangles(RowPoints[i][j + 1], RowPoints[i + 1][j + 1], RowPoints[i + 1][j])
                }
                else
                {
                    DrawTriangles(RowPoints[i][j], RowPoints[i + 1][j], RowPoints[i][j + 1])
                    DrawTriangles(RowPoints[i][j + 1], RowPoints[i + 1][j + 1], RowPoints[i + 1][j])
                }   
            }
        }
    }
    pop(); //its not pop is it? nope not pop. getting there though i'd say
}

//Intialize canvas size and randomized strokeweight.
function IntializeCanvas() {
    createCanvas(500,500);
    translate(-100,0)
    colorMode(HSB, 300, 100, 100);  
    rectMode(CENTER);
    colorPalletteID = int(random(0,colorArray.length));
    let randomStroke = random(0.2,4);
    strokeWeight(.2);
}


//Create a subdivison of 3 triangles from a single triangle by connecting each two
//original vertices with the calculated midpoint.
function DrawTriangles(v0, v1, v2) {
    let randomNum = int(random(0,5));
    c = colorArray[colorPalletteID][randomNum];
    
    let triangleMid = CalculateMid(v0, v1, v2);
    beginShape(TRIANGLES)
    fill(c,85,85);
    vertex(v0.x, v0.y);
    vertex(triangleMid.x, triangleMid.y);
    vertex(v2.x, v2.y);

    fill(c, 60, 60);
    vertex(v0.x, v0.y);
    vertex(triangleMid.x, triangleMid.y);
    vertex(v1.x, v1.y);

    fill(c, 30, 30);
    vertex(v1.x, v1.y);
    vertex(triangleMid.x, triangleMid.y);
    vertex(v2.x, v2.y);
    endShape(CLOSE);
}

//Calculate a mid point between three given points by sum the x and y values and 
//diving each by 3. Then place the result into a vector and return it.
function CalculateMid(pointA, pointB, center) {

    let mid = createVector((pointA.x + center.x + pointB.x) / 3, (pointA.y + center.y + pointB.y) / 3);
    return mid;
}
