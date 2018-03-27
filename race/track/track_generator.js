class TrackGenerator {
    constructor() {
        this.minTrackWidth = 5;
        this.maxTrackWidth = 100;
        this.startTrackWIdth = 2*this.minTrackWidth;

        this.minSegmentLength = 4;
        this.maxSegmentLength = 4;

        this.maxCornerAngle = 0.25*Math.PI;
        this.maxWidthDiff = 2;

        this.nodeCount = 100;
    }

    generate() {
        let track = new Track();

        let node0 = new TrackNode(0, 0, this.startTrackWIdth, 0);
        let node1 = new TrackNode(this.minSegmentLength, 0, this.startTrackWIdth, 0);

        track.nodes = [node0, node1];

        this.addRandomNodes(track, this.nodeCount);

        return track;
    }

    addRandomNodes(track, amount) {
        for (let i = 0; i < amount; i++) {
            this.addRandomNode(track);
        }
    }
    
    addRandomNode(track) {
        let prevNode = track.nodes[track.nodes.length - 1];

        let angle = prevNode.angle;
        angle += randomGauss(-this.maxCornerAngle, this.maxCornerAngle); 

        let distance = randomGauss(this.minSegmentLength, this.maxSegmentLength);

        let nextX = prevNode.x + Math.cos(angle) * distance;
        let nextY = prevNode.y + Math.sin(angle) * distance;

        let nextWidth = prevNode.width += randomGauss(-this.maxWidthDiff, this.maxWidthDiff);
        nextWidth = Math.min(this.maxTrackWidth, Math.max(this.minTrackWidth, nextWidth));

        let nextNode = new TrackNode(nextX, nextY, nextWidth, angle);

        track.nodes.push(nextNode);
    }
}