class circle{
    constructor(_x,_y,_width,_height){
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
    }

    render()
    {
        ellipse(this.x, this.y, _width, _height);
    }
    
}