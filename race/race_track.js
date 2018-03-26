class RaceTrack {
    constructor() {
        this.minTrackWidth = 5;
        this.maxTrackWidth = 100;
    
        let node0 = new TrackNode(0, 0, 1);
        let node1 = new TrackNode(0, 1, 1);

        this.nodes = [node0, node1];
    }

    addRandomNodes(amount) {
        for (let i = 0; i < amount; i++) {
            this.addRandomNode();
        }
    }
    
    addRandomNode() {
        let node0 = this.nodes[this.nodes.length - 2];
        let node1 = this.nodes[this.nodes.length - 1];

        let angle = randomGauss(0.25*Math.PI, -0.25*Math.PI) + Math.atan2(node1.x - node0.x, node1.y - node0.y);

        let distance = randomGauss(2, 1);

        let nextX = node1.x + Math.sin(angle) * distance;
        let nextY = node1.y + Math.cos(angle) * distance;
        let nextWidth = Math.min(this.maxTrackWidth, Math.max(this.minTrackWidth, node1.width + randomGauss(1, -1)));

        let nextNode = new TrackNode(nextX, nextY, nextWidth);

        this.nodes.push(nextNode);
    }

}