class RaceRenderer {
    constructor(race, canvasId) {
        this.race = race;

        let canvas = document.getElementById(canvasId);
        this.context = canvas.getContext('2d');

        this.trackRenderer = new TrackRenderer(this.context);
        this.vehicleRenderer = new VehicleRenderer(this.context);
        
        this.resize();
        window.addEventListener('resize', this.resize.bind(this), true);
        
        requestAnimationFrame(this.render.bind(this));
    }

    render() {
        this.trackRenderer.render(this.race.track);

        for (let vehicle of this.race.vehicles) {
            this.vehicleRenderer.render(vehicle);
        }

        requestAnimationFrame(this.render.bind(this));
    }

    resize() {
        this.context.canvas.width = window.innerWidth;
        this.context.canvas.height = window.innerHeight;

        this.render();
    }
}