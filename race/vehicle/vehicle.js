class Vehicle {
    constructor(width = 2, length = 5, x = 0, y = 0, angle = 0) {
        this.width = width;
        this.length = length;
        this.x = x;
        this.y = y;
        this.angle = angle;
        
        this.linSpeed = 0;
        this.angSpeed = 0;
    }
    
    step(dt) {
        // Calculate current front wheel position.
        let frontWheelX = this.x + this.length/2 * Math.cos(this.angle);
        let frontWheelY = this.y + this.length/2 * Math.sin(this.angle);
        
        // Update front wheel position based on linear and angular speed.
        frontWheelX += this.linSpeed * dt * Math.cos(this.angle + this.angSpeed);
        frontWheelY += this.linSpeed * dt * Math.sin(this.angle + this.angSpeed);
        
        // Calculate current back wheel position.
        let backWheelX = this.x - this.length/2 * Math.cos(this.angle);
        let backWheelY = this.y - this.length/2 * Math.sin(this.angle);
        
        // Update back wheel position based on linear and angular speed.
        backWheelX += this.linSpeed * dt * Math.cos(this.angle);
        backWheelY += this.linSpeed * dt * Math.sin(this.angle);
        
        // Calculate new position and rotation based on wheel positions.
        this.x = (frontWheelX + backWheelX)/2;
        this.y = (frontWheelY + backWheelY)/2;
        this.angle = Math.atan2(frontWheelY - backWheelY, frontWheelX - backWheelX);
    }
}