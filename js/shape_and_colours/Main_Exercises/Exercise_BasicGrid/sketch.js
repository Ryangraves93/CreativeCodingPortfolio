let stepX = 20;
let stepY = 20;

function setup(){
    createCanvas(500,500);
    noStroke();
    colorMode(HSB,width,height,100); 
    background(0,0,0);
  }
  
  function draw(){

  for(let gridY = 0; gridY<height; gridY = gridY+stepY){
    for(let gridX = 0; gridX<height; gridX = gridX+stepX){
      fill(gridX,height- gridY ,100);
      rect(gridX,gridY,stepX,stepY);
    }
   }
  }
  