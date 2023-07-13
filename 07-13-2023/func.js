function cookie(x){
    return (typeof x) == "string" ? "Who ate the last cookie? It was Zach!" :
          (typeof x) == "number" || (typeof x) == "float" ? "Who ate the last cookie? It was Monica!" :
                          "Who ate the last cookie? It was the dog!"
  }