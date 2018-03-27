class TrackRenderer {
    constructor(track, canvasId) {
        this.track = track;

        let canvas = document.getElementById(canvasId);
        this.context = canvas.getContext('2d');
    }

    render() {
        this.renderBackground();

        // Save context state to restore later
        this.context.save();
                
        // Translate to the vehicle position with center of screen as origin.
        this.context.translate(
            this.context.canvas.width/8,
            this.context.canvas.height/2);

        
        for (let i = 1; i < this.track.nodes.length; i++) {
            this.renderSegment(this.track.nodes[i-1], this.track.nodes[i]);
        }
        
        // Restore previous context state
        this.context.restore();
    }

    renderSegment(node0, node1) {
        this.context.strokeStyle = "#000000";

        this.context.beginPath();
        this.context.moveTo(node0.leftX, node0.leftY);
        this.context.lineTo(node1.leftX, node1.leftY);
        this.context.moveTo(node0.rightX, node0.rightY);
        this.context.lineTo(node1.rightX, node1.rightY);
        this.context.stroke();
    }

    renderNode(node) {
        this.context.fillStyle = "#000000";

        this.context.beginPath();
        this.context.arc(node.x*2 + this.context.canvas.width/2, node.y*2 + this.context.canvas.height/2, node.width, 0, 2*Math.PI);
        this.context.fill();
    }

    renderBackground(color = "#9ea7b8") {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}