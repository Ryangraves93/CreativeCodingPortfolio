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
        fill(interA);
        push();
        translate(this.x + offset,this.y + offset);
        rotate(theta);
        rect(0,0,this.width,this.height);
        pop();  
    }

    lerpOnMouseMove(){
        let from = color(this.x + 60,this.y + 60,100);
        let to = color(this.x * 3,this.y * 3,100);
        let mouseMapX = map(mouseX,0,width,0,1);
        let mouseMapY = map(mouseY,0,height,0,1);
        let interA = lerpColor(from,to,mouseMapX*mouseMapY);

        return interA;
    }
}



