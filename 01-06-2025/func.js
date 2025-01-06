function maxProduct(a) {
    let l1 = a.splice((a.indexOf(Math.max(...a))),1)
    let l2 = a.splice((a.indexOf(Math.max(...a))),1)
    return l1 * l2
}