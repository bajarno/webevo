class Neuron {
    constructor(inputs = [], activationFunction = identity) {
        this.activationFunction = activationFunction;
        this.inputs = inputs;

        this.inputWeights = [];
        for (let i = 0; i < inputs.length; i++) {
            // Random weight in range [-1 1]
            let random_weight = Math.random() * 2 - 1;
            
            this.inputWeights.push(random_weight);
        }
        
        this.output = 0;
    }

    activate() {
        if (this.inputs.length == 0) {
            return;
        }
        
        this.output = this.activationFunction(this.sumInputs());
    }

    sumInputs() {
        var sum = 0;
        
        for (let i = 0; i < this.inputs.length; i++) {
            sum += this.inputs[i].output * this.inputWeights[i];
        }

        return sum;
    }
}