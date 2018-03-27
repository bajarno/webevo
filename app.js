nn = new NeuralNetwork();

nn.addDenseLayer(2);
nn.addDenseLayer(3);
nn.addDenseLayer(3, relu);
nn.addDenseLayer(3);
nn.addDenseLayer(1);

networkRenderer = new NetworkRenderer(nn, 'networkCanvas');
networkRenderer.render();

console.log(nn.process([1,0]));



race = new Race();
raceRenderer = new RaceRenderer(race, 'raceCanvas')