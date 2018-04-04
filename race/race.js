class Race {
    constructor() {
        this.trackGenerator = new TrackGenerator();
        this.track = this.trackGenerator.generate();
        
        this.vehicles = [];
                
        let vehicle = new Vehicle(this.track);
        vehicle.linSpeed = 1;
        vehicle.angSpeed = 0.01*Math.PI;
        this.addVehicle(vehicle);

//         for (let i = 0; i < 40; i++) {
//             let vehicle = new Vehicle(this.track);
//             vehicle.linSpeed = 1;
//             vehicle.angSpeed = (-0.0975+0.005*i)*Math.PI;

//             this.addVehicle(vehicle);
//         }

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