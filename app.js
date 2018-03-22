nn = new NeuralNetwork();

input1 = new Neuron();
input2 = new Neuron();

nn.addLayer([input1, input2]);

l1 = nn.addDenseLayer(3);
l2 = nn.addDenseLayer(3, relu);
l3 = nn.addDenseLayer(3);

output = new Neuron(l3);
nn.addLayer([output]);
input1.output = 1;

networkRenderer = new NetworkRenderer(nn, 'networkCanvas');
networkRenderer.render();

nn.forwardPass();
console.log(nn.process([1,0]));


track = new RaceTrack();
trackRenderer = new TrackRenderer(track, 'trackCanvas');

function addNodes(amount, iteration) {
    if (iteration < 100) {
        track.addRandomNodes(amount);
        trackRenderer.render();

        window.setTimeout(addNodes.bind(null, amount, iteration + 1),10);
    }
}

addNodes(50, 0);

window.onresize = function(event) {
    let trackCanvas = document.getElementById('trackCanvas');
    trackCanvas.width = window.innerWidth;
    trackCanvas.height = window.innerHeight;
    trackRenderer.render();
    
    let networkCanvas = document.getElementById('networkCanvas');
    networkCanvas.width = networkCanvas.offsetWidth;
    networkCanvas.height = networkCanvas.offsetHeight;
    networkRenderer.render();
};

window.dispatchEvent(new Event('resize'));
