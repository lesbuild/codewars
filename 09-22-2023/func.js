function evil(n) {
    return n.toString(2).match(/1/g).length % 2 == 1 ? "It's Odious!" : "It's Evil!"
}