class Race {
    constructor() {
        this.trackGenerator = new TrackGenerator();
        this.track = this.trackGenerator.generate();
        
        this.vehicles = [];

        for (let i = 0; i < 50; i++) {
            let network = new NeuralNetwork();

            network.addDenseLayer(6);
            network.addDenseLayer(4, afSigmoid);
            network.addDenseLayer(2, afTanh);
        
            let vehicle = new Vehicle(this.track, network);
            this.addVehicle(vehicle);
        }

        this.step(1);
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }


    step(dt) {
        for (let vehicle of this.vehicles) {
            vehicle.step(dt);
        }

        window.setTimeout(this.step.bind(this, dt), 1000/60);
    }
}