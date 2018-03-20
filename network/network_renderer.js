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

            if (i > 0) {
                let previousLayer = this.network.layers[i - 1];
                let leftX = x - neuronRadius * 3;
                let rightX = x - neuronRadius;
                this.renderConnections(previousLayer, layer, leftX, rightX, neuronRadius);
            }
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

    renderConnections(leftLayer, rightLayer, leftX, rightX, neuronRadius) {
        let totalHeight = this.context.canvas.height;

        for (let i = 0; i < rightLayer.length; i++) {
            let rightNeuron = rightLayer[i];
            let rightY = (totalHeight / 2) + (-(rightLayer.length - 1) + 2 * i) * 2 * neuronRadius;


            for (let j = 0; j < rightNeuron.inputs.length; j++) {
                let leftNeuron = rightNeuron.inputs[j];
                let leftNeuronIndex = leftLayer.findIndex(neuron => neuron == leftNeuron);
                let leftY = (totalHeight / 2) + (-(leftLayer.length - 1) + 2 * leftNeuronIndex) * 2 * neuronRadius;
                
                this.renderConnection(leftX, leftY, rightX, rightY, rightNeuron.inputWeights[j]);
            }
        }
    }

    renderNeuron(neuron, x, y, radius) {
        this.context.fillStyle = "#000000";

        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2*Math.PI);
        this.context.fill();
    }

    renderConnection(leftX, leftY, rightX, rightY, weight) {
        this.context.lineWidth = Math.abs(weight);
        
        this.context.beginPath();
        this.context.moveTo(leftX, leftY);
        this.context.lineTo(rightX, rightY);
        this.context.stroke();
    }

    renderBackground(color = "#9ea7b8") {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}