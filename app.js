race = new Race();
raceRenderer = new RaceRenderer(race, 'raceCanvas')

networkRenderer = new NetworkRenderer(race.vehicles[0].network, 'networkCanvas');
networkRenderer.render();