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

renderer = new NetworkRenderer(nn, 'nnCanvas');
renderer.render();

nn.forwardPass();
console.log(nn.process([1,0]));