class NeuralNetwork {
    constructor() {
        this.layers = [];
    }

    addLayer(layer) {
        this.layers.push(layer);
    }

    addDenseLayer(size, activationFunction = afIdentity) {
        let previousLayer = this.layers[this.layers.length - 1];

        let layer = [];

        for (let i = 0; i < size; i++) {
            layer.push(new Neuron(previousLayer, activationFunction));
        }

        this.layers.push(layer);

        return layer;
    }

    forwardPass() {
        for (let layer of this.layers) {
            for (let neuron of layer) {
                neuron.activate();
            }
        }
    }

    process(input) {
        let inputLayer = this.layers[0];
        
        for (let i = 0; i < inputLayer.length; i++) {
            inputLayer[i].output = input[i];
        }

        this.forwardPass();

        let outputLayer = this.layers[this.layers.length - 1];
        return outputLayer.map(neuron => neuron.output);
    }
}