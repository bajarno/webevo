class VehicleRenderer {
    constructor(context) {
        this.context = context;
    }
    
    render(vehicle) {
        // Save context state to restore later
        this.context.save();
                
        // Translate to the vehicle position with center of screen as origin.
        this.context.translate(
            this.context.canvas.width/8 + vehicle.x,
            this.context.canvas.height/2 + vehicle.y);
        
        // Rotate with vehicle angle plus 90', since vehicle points to right by default.
        this.context.rotate(vehicle.angle + Math.PI*0.5);
        
        // Draw
        this.context.beginPath();

        this.context.rect(
            -vehicle.width/2,
            -vehicle.length/2,
            vehicle.width,
            vehicle.length);

        this.context.fillStyle = "#FFFFFF";
        this.context.fill();

        // Restore previous context state
        this.context.restore();
    }
}