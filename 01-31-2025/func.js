function goGoGadget(){
    let gadgets = ["Copter","Binoculars","Brella","Coat","Ears","Hands","Magnets","Magnifying Glass","Mallet","Skates","Skis","Springs","Watch"]
    return `Go go gadget ${gadgets[Math.floor(Math.random() * gadgets.length)]}!`
}