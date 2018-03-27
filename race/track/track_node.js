class TrackNode {
    constructor(x, y, width, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.setAngle(angle);
    }

    setAngle(angle) {
        this.angle = angle;

        this.leftX = this.x + Math.sin(angle)*this.width/2;
        this.leftY = this.y - Math.cos(angle)*this.width/2;
        
        this.rightX = this.x - Math.sin(angle)*this.width/2;
        this.rightY = this.y + Math.cos(angle)*this.width/2;
    }
}