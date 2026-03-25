function evenOrOdd(arr){
    let odd = arr.filter(a=>a%2==1).reduce((b,c)=>b+c);
    let even = arr.filter(a=>a%2==0).reduce((b,c)=>b+c);
    return odd > even ? `Odd total ${odd} is larger than even ${even}` : even > odd ?
            `Even total ${even} is larger than odd ${odd}` : `Both number are equal ${even}`
}

Description:

Total the array whether odd is greater or even or same total.