function secretMessage(alpha,pos){
    return pos.every(a=>a < 26) ? pos.map(a=>alpha[a]) : "Invalid message"
}