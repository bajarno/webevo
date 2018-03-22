class TrackRenderer {
    constructor(track, canvasId) {
        this.track = track;

        let canvas = document.getElementById(canvasId);
        this.context = canvas.getContext('2d');
    }

    render() {
        this.renderBackground();
        
        for (let node of this.track.nodes) {
            this.renderNode(node);
        }
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