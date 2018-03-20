class NetworkRenderer {
    constructor(network, canvasId) {
        this.network = network;

        let canvas = document.getElementById(canvasId);
        this.context = canvas.getContext('2d');
    }

    render() {
        this.renderBackground();
        
        let totalWidth = this.context.canvas.width;
        let totalHeight = this.context.canvas.height;
        
        let neuronWidth = totalWidth / (2 * this.network.layers.length + 1) / 2;

        let maxLayerLength = Math.max(...this.network.layers.map(layer => layer.length));
        let neuronHeight = totalHeight / (2 * maxLayerLength + 1) / 2;

        let neuronRadius = Math.min(neuronWidth, neuronHeight);

        for (let i = 0; i < this.network.layers.length; i++) {
            let layer = this.network.layers[i];
            
            let x = (totalWidth / 2) + (-(this.network.layers.length - 1) + 2 * i) * 2 * neuronRadius;
            
            this.renderLayer(layer, x, neuronRadius);
        }
    }

    renderLayer(layer, x, neuronRadius) {
        let totalHeight = this.context.canvas.height;

        for (let i = 0; i < layer.length; i++) {
            let neuron = layer[i];

            let y = (totalHeight / 2) + (-(layer.length - 1) + 2 * i) * 2 * neuronRadius;

            this.renderNeuron(neuron, x, y, neuronRadius);
        }

    }

    renderNeuron(neuron, x, y, radius) {
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2*Math.PI);
        this.context.stroke();
    }

    renderBackground(color = "#9ea7b8") {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}