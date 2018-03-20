class NeuralNetwork {
    constructor() {
        this.layers = [];
    }

    addLayer(layer) {
        this.layers.push(layer);
    }

    addDenseLayer(size, activationFunction = identity) {
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
}