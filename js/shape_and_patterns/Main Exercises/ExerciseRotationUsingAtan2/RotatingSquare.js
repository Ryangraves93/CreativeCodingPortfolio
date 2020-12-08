class RotatingSquare{
    constructor(_x,_y,_width,_height){
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
        
    }

    render(){
        var theta = atan2(mouseY - this.y,mouseX - this.x);
        var offset = 25;
        strokeWeight(2);
        noStroke();
        var interA = this.lerpOnMouseMove();
        fill(255,0,100);
        push();

        translate(this.x + offset,this.y + offset);
        rotate(theta);
        ellipse(0,0,this.width,this.height);

        var size = map(dist(this.x,this.y,mouseX,mouseY),0,width,5,15);
        var offset = map(dist(this.x,this.y,mouseX,mouseY),0,width,0,10);
        fill(0,0,0)        
        ellipse(this.width/4 - offset,this.height/4 - offset,size, size);
        pop();  
    }

    lerpOnMouseMove(){
        let from = color(this.x + 120,this.y + 120,100);
        let to = color(this.x * 2,this.y * 2,100);
        let mouseMapX = map(mouseX,0,width,0,1);
        let mouseMapY = map(mouseY,0,height,0,1);
        let interA = lerpColor(from,to,mouseMapX*mouseMapY);

        return interA;
    }
}



