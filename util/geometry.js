// Returns the angle of the line from (x1, y1)->(x2, y2) with respect to
// the line from (x2, y2)->(x3, y3).
function angleVectors(x1, y1, x2, y2, x3, y3) {
    return anglePoints(x2, y2, x3, y3) - anglePoints(x1, y1, x2, y2);      
}

// Returns the angle of the line from (x1, y1)->(x2, y2) with respect to 
// the x-axis.
function anglePoints(x1, y1, x2, y2) {
    return Math.atan2(x2 - x1, y2 - y1);
}

// Returns the distance between the points at (x1, y1) and (x2, y2).
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
}

// Calculates the intersection point between the line1 (x1, y1)->(x2, y2)
// and line2 (x3, y3)->(x4, y4). If there is no intersection, returns null.
// Otherwise returns (x, y, seg1, seg2). (x, y) are the coordinates of
// the intersection point. seg1 and seg2 indicate whether the intersection
// point is within line1 or line2 respectively.
function linesIntersectionPoint(x1, y1, x2, y2, x3, y3, x4, y4)
{
    let denom = (y4 - y3)*(x2 - x1) - (x4 - x3)*(y2 - y1);

    if (denom == 0) {
        return {x: null, y: null, seg1: null, seg2: null};
    }

    let ua = ((x4 - x3)*(y1 - y3) - (y4 - y3)*(x1 - x3))/denom;
    let ub = ((x2 - x1)*(y1 - y3) - (y2 - y1)*(x1 - x3))/denom;
    
    return {
        x: x1 + ua*(x2 - x1),
        y: y1 + ua*(y2 - y1),
        seg1: ua >= 0 && ua <= 1,
        seg2: ub >= 0 && ub <= 1
    };
}