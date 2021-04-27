let font;
let fontpathArr = [];
let path;
let word = 'Ryan Graves Creative Computing'
let bArrayCreated = false;



function setup() {
  createCanvas(windowWidth, windowHeight);
  opentype.load('Data/FreeSans.otf', function (err, f) {
    if (err) {
      console.log(err);
    }
    else {
      font = f;

    }
  })

}

function CreateArray() {
  for (var i = 0; i < word.length; i++) {

    let newFont = font.getPath(word.charAt(i), 0, 0, 15);
    let path = new g.Path(newFont.commands);
    path = g.resampleByAmount(path,400);
    fontpathArr.push(path);
  }
}

function draw() {

  if (!font) {
    return;
  }
  background(0);

  if (!bArrayCreated) {
    CreateArray();
    bArrayCreated = true;
  }

  fill(255, 0, 0);
  noStroke();

  for (let i = 0; i < fontpathArr.length; i++) {
    push();
    translate(20 * (i + 1), 200)
    for (let j = 0; j < fontpathArr[i].commands.length; j++) {

      switch (fontpathArr[i].commands[j].type) {

        case "M":
          beginShape();
          vertex(fontpathArr[i].commands[j].x, fontpathArr[i].commands[j].y);
          break;

        case "C":
          curveVertex(fontpathArr[i].commands[j].x, fontpathArr[i].commands[j].y);
          curveVertex(fontpathArr[i].commands[j].x1, fontpathArr[i].commands[j].y1);
          curveVertex(fontpathArr[i].commands[j].x2, fontpathArr[i].commands[j].y2);
          
          break;

        case "L":
          vertex(fontpathArr[i].commands[j].x, fontpathArr[i].commands[j].y);
          break;

        case "Z":
          endShape();
          break;
        default:
          console.log("Default hit");
      }

    }
    pop();
  }
  endShape();
}