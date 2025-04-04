function randomCase(x) {
    return x.replace(/./g, function(m){return Math.random() < 0.5 ? m.toUpperCase():
           m.toLowerCase()})
}