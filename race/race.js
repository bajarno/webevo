class Race {
    constructor() {
        this.trackGenerator = new TrackGenerator();
        this.track = this.trackGenerator.generate();

        let vehicle = new Vehicle(this.track);
        vehicle.linSpeed = 1;

        this.vehicles = [vehicle];

        this.step(1);
    }

    step(dt) {
        for (let vehicle of this.vehicles) {
            vehicle.step(dt);
        }

        window.setTimeout(this.step.bind(this, dt), 1000/60);
    }
}