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

// Returns a value indicating whether the line from (lx1, ly1)->(lx2, ly2)
// intersects with the rectangle with center (rx, rx), with rw, height rh
// and rotation ra.
function lineRectIntersect(lx1, ly1, lx2, ly2, rw, rh, rx, ry, ra) {
    let rx1 = rx + Math.cos(ra) * rh / 2 - Math.sin(ra) * rw / 2;
    let ry1 = ry + Math.sin(ra) * rh / 2 + Math.cos(ra) * rw / 2;

    let rx2 = rx - Math.cos(ra) * rh / 2 - Math.sin(ra) * rw / 2;
    let ry2 = ry - Math.sin(ra) * rh / 2 + Math.cos(ra) * rw / 2;

    let rx3 = rx - Math.cos(ra) * rh / 2 + Math.sin(ra) * rw / 2;
    let ry3 = ry - Math.sin(ra) * rh / 2 - Math.cos(ra) * rw / 2;
    
    let rx4 = rx + Math.cos(ra) * rh / 2 + Math.sin(ra) * rw / 2;
    let ry4 = ry + Math.sin(ra) * rh / 2 - Math.cos(ra) * rw / 2;

    return linesIntersect(lx1, ly1, lx2, ly2, rx1, ry1, rx2, ry2) ||
           linesIntersect(lx1, ly1, lx2, ly2, rx2, ry2, rx3, ry3) ||
           linesIntersect(lx1, ly1, lx2, ly2, rx3, ry3, rx4, ry4) ||
           linesIntersect(lx1, ly1, lx2, ly2, rx4, ry4, rx1, ry1);
}

// Returns a value indicating whether the line from (x1, y1)->(x2, y2)
// intersects with (x3, y3)->(x4, y4)
// See https://stackoverflow.com/a/24392281
function linesIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    let det = (x2 - x1) * (y4 - y3) - (x4 - x3) * (y2 - y1);

    if (det === 0) {
        return false;
    } else {
        let lambda = ((y4 - y3) * (x4 - x1) + (x3 - x4) * (y4 - y1)) / det;
        let gamma = ((y1 - y2) * (x4 - x1) + (x2 - x1) * (y4 - y1)) / det;
        return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
};