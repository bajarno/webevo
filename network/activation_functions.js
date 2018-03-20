function identity(i) {
    return i;
}

function relu(i) {
    if (i < 0) {
        return 0;
    } else {
        return i;
    }
}