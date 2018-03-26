nn = new NeuralNetwork();

nn.addDenseLayer(2);
nn.addDenseLayer(3);
nn.addDenseLayer(3, relu);
nn.addDenseLayer(3);
nn.addDenseLayer(1);

networkRenderer = new NetworkRenderer(nn, 'networkCanvas');
networkRenderer.render();

console.log(nn.process([1,0]));



track = new RaceTrack();
track.addRandomNodes(1000);
trackRenderer = new TrackRenderer(track, 'trackCanvas');
trackRenderer.render();

vehicle = new Vehicle();
vehicleRenderer = new VehicleRenderer(vehicle, 'trackCanvas');
vehicleRenderer.render();

window.onresize = function(event) {
    let trackCanvas = document.getElementById('trackCanvas');
    trackCanvas.width = window.innerWidth;
    trackCanvas.height = window.innerHeight;

    trackRenderer.render();
    vehicleRenderer.render();
    
    let networkCanvas = document.getElementById('networkCanvas');
    networkCanvas.width = networkCanvas.offsetWidth;
    networkCanvas.height = networkCanvas.offsetHeight;
    networkRenderer.render();
};

window.dispatchEvent(new Event('resize'));

function step() {
    vehicle.step(1);

    trackRenderer.render();
    vehicleRenderer.render();

    window.setTimeout(step,1000/60);
}

vehicle.linSpeed = 1;
vehicle.angSpeed = 0.05 * Math.PI;
step();