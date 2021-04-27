class circle{
    constructor(_points,_numOfSegments){
        this.points = _points;
        this.numOfSegments = _numOfSegments;

        this.setup();
    }

    setup() {
     
      }

    render()
    {
     // background(0)
        push();
        translate(width / 2, height / 2);
      
        beginShape();
      
        for (let i = 0; i < this.points.length; i++) {
          fill(255, 0, 0);
          ellipse(this.points[i].x, this.points[i].y, 10, 10);
        }
      
        noFill();
        stroke(255);
      
        beginShape();
      
        // First Control Point (Not Drawn)
        curveVertex(this.points[this.points.length - 1].x, this.points[this.points.length - 1].y);
      
        for (let i = 0; i < this.points.length; i++) {
          curveVertex(this.points[i].x, this.points[i].y);
        }
      
        curveVertex(this.points[0].x, this.points[0].y);
        curveVertex(this.points[1].x, this.points[1].y);
      
        endShape();
      
        pop();
      
        for (let i = 0; i < this.points.length; i++) {
          points[i].y += cos(frameCount / 150) * 0.8;
          points[i].x += sin(frameCount / 100) * 0.8;
        }
        
    }
    
    
}