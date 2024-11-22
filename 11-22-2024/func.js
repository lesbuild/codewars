function createMessage(s) {
    return function(next){
    if (next === undefined) {return s;}
        return createMessage(s + " "+ next);
    }
}