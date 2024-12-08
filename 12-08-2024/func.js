function bald(x){
    let count = 0
    if(x.includes("/")){
      count = x.match(/[/]/g).length
    }
    let joke = {0:"Clean!", 1:"Unicorn!", 2:"Homer!"}
    x = x.replace(/([/])/g,"-")
    return count > 5 ? [x,"Hobo!"] : count > 2 ? [x,"Careless!"] : [x,joke[count]]
  }