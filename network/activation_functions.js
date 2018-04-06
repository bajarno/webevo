function afIdentity(i) {
    return i;
}

function afBinary(i) {
    return i < 0 ? 0 : 1;
}

function afSigmoid(i) {
    return 1 / (1 + Math.exp(-i));
}

function afTanh(i) {
    return (Math.exp(i) - Math.exp(-i)) / (Math.exp(i) + Math.exp(-i));
}

function afAtan(i) {
    return Math.atan(i);
}

function afRelu(i) {
    if (i < 0) {
        return 0;
    } else {
        return i;
    }
}