function solve(s,g){
    return (s-g) % g === 0 ? [g,s-g] : -1
}