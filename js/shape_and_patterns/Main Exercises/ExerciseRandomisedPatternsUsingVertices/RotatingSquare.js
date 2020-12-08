class RotatingSquare {
    constructor(_x, _y, _width, _height, _i, _lines) {
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
        this.i = _i;
        this.lines = _lines;
    }

    render(RotationPointX, RotationPointY) {

        var theta = atan2(cos(RotationPointY), sin(RotationPointX));
        var offset = 25;
        push();
        translate(this.x + offset, this.y + offset);
        rotate(theta);
        strokeWeight(2);
        beginShape(POINTS);

        for (let i = 0; i < this.lines; i++) {
            i > 1 ? vertex(this.width / i, this.height / i) :
                vertex(this.width / i * i, this.height / i * i);
        }
        endShape();
        pop();
    }
}




