class VehicleRenderer {
    constructor(vehicle, canvasId) {
        this.vehicle = vehicle;

        let canvas = document.getElementById(canvasId);
        this.context = canvas.getContext('2d');
    }
    
    render() {
        // Save context state to restore later
        this.context.save();
                
        // Translate to the vehicle position with center of screen as origin.
        this.context.translate(
            this.context.canvas.width/8 + this.vehicle.x,
            this.context.canvas.height/2 + this.vehicle.y);
        
        // Rotate with vehicle angle plus 90', since vehicle points to right by default.
        this.context.rotate(this.vehicle.angle + Math.PI*0.5);
        
        // Draw
        this.context.beginPath();

        this.context.rect(
            -this.vehicle.width/2,
            -this.vehicle.length/2,
            this.vehicle.width,
            this.vehicle.length);

        this.context.fillStyle = "#FFFFFF";
        this.context.fill();

        // Restore previous context state
        this.context.restore();
    }
}