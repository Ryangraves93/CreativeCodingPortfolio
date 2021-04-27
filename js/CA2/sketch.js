//Sketch Variables
var angle = 0;
var cubeAmount = 36;
var canvasAngle;
var maxDistance;
var backgroundColor = [162,32,121];
var amplitude = 2;
let frameCount = 0;

// gui
let visible = true;
let gui;

//Sound library variables
let song, analyzer;
let rms;

let switchPerspective = false;

//Preload function used to load the song from the assets folder
function preload()
{
  song = loadSound('assets/Go.mp3');

  if (song)
  {
    console.log("Song loaded");
  }
}

//Intialize canvas with WebGL, load UI elements from UI library and 
//create instance of amplitude class to access sound functionality
function setup() {

  SetupWebGL();
  IntiateUI();

  song.loop();

  analyzer = new p5.Amplitude();
  analyzer.setInput(song);

  rms = analyzer.getLevel();
}

function draw() {

  //Create WebGL projection with orthographic
  OrthographicProjection()

  //Use sound library to retrieve sound level value between 0 - 1
  rms = analyzer.getLevel();
   
  //Modify amplitude
  if (rms > 0.1 && rms < 0.2)
  {
    amplitude = 1.2;
  }
  else if (rms > 0.2 && rms < 0.3)
  {
    amplitude = 1.4
  }
  else if (rms > 0.3 && rms < 0.4)
  {
    amplitude = 1.6;
  }
  else
  {
    amplitude = 2;
  }
  
  //Nested loop creating boxes in WebGL which gets translated
  //into a square of boxes that are each offset to create oscililation.
  for (let z = 0; z < width; z += cubeAmount) {
    for (let i = 0; i < width; i += cubeAmount) {
      
      push();
      ConstructCube(i,z);
      pop();
    }

  }
  
  angle += 0.1;

  //Affect distance value over time 
  frameCount++;
  if (frameCount % 60 == 0)
  {

    if (maxDistance < -300 )
    {
      //reset distance to an odd number to avoid hitting 0
      maxDistance = 302;
    }

      maxDistance -= 5;
  }
}

//Create a box in WebGL at using indexing passed in.
function ConstructCube(i,z) {
  let d = dist(i,z,width/2, height/2 );

  let offset = map(d , 0, maxDistance, -2 , 2)

  let a = angle + offset;
  let h = floor(map(sin(a), -1, 1, 100, 300));

  translate(i - width / 2,0, z - height / 2);
  
  normalMaterial();

  box(cubeAmount - 2, h * (rms * amplitude), cubeAmount - 2)
}

//GUI variables for interaction
function IntiateUI() {
  gui = createGui();

  sliderRange(0, 7, 0.05);
  gui.addGlobals('canvasAngle');

  sliderRange(20, 120, 1);
  gui.addGlobals('cubeAmount');

  sliderRange(50, 300, 1);
  gui.addGlobals('maxDistance');

  sliderRange(1, 10, .2);
  gui.addGlobals('amplitude');

  sliderRange(0, 255, 1);
  gui.addGlobals('backgroundColor');
}

//Intializing WebGL
function SetupWebGL()
{
  createCanvas(800, 800, WEBGL);
  canvasAngle = atan(1/sqrt(2));
  maxDistance = dist(0,0,200,200);
}

//Changes the view to orthographic projection and changes angle perspective 
//using a modulus of the framecount
function OrthographicProjection()
{
  background(backgroundColor);
  ortho(-700, 800+ sin(frameCount * 0.01) * 100, -800 + sin(frameCount * 0.01) * 100, 800, 0 ,1500);

  if (frameCount % 240 == 0)
  {
    switchPerspective = !switchPerspective;
  } 
  
  if (switchPerspective)
  {
    rotateY(-QUARTER_PI)
    rotateX(-canvasAngle);
  }
  else
  {
    rotateX(-canvasAngle);
    rotateY(-QUARTER_PI)
  }
  
}
