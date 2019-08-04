class Rectangle {
    constructor(x, y, width, height, color, angle = 0, isSelected = false) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.angle = angle;
        this.isSelected = isSelected 
        this.isRotating  = false
    }

    draw(ctx) {

        const centerX = this.x + this.width / 2;
        const centerY = this.y + this.height / 2;
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.translate(-centerX, -centerY);

        if (this.isSelected) {
            ctx.fillStyle = 'black';
            ctx.fillRect(this.x - 3, this.y - 3, this.width + 6, this.height + 6);
        }

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.restore();
    }

    update () {
        if (this.isRotating) {
            this.angle+=1
        }
        if (this.angle >= 360) {
            this.angle -= 360
            this.isRotating = false
        }
    }

    isWithin(x, y) {
        return (x >= this.x && x <= this.x+this.width && y >= this.y && y <= this.y+this.height)
    }

    static randomRectangle(canvasWidth, canvasHeight) {
        const length = (Math.random() *100 )+ 200
        return new Rectangle(getValidX(), getValidY(),  length, length, Utils.getRandomColor())
        
        function getValidX() {
            return Math.random()* (canvasWidth-length) * .95
        }
       
        function getValidY() {
            return Math.random()* (canvasHeight-length) * .95
        }
    }

}

