function avgSpending(listPrice){
    return listPrice.reduce((a,b)=>a+b,0) / listPrice.length
}