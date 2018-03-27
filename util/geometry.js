function angleVectors(x1, y1, x2, y2, x3, y3) {
    return anglePoints(x2, y2, x3, y3) - anglePoints(x1, y1, x2, y2);      
}

function anglePoints(x1, y1, x2, y2) {
    return Math.atan2(x2 - x1, y2 - y1);
}

function distance(x1, y1, x2, y2) {
    let a = x2 - x1;
    let b = y2 - y1;

    return Math.sqrt(a*a + b*b);
}