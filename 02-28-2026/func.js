function combineTogether(arr){
    return arr.filter(a=>a%2==0).length > arr.filter(b=>b%2==1).length ? arr.reduce((a,b)=>a+b) :
           arr.reduce((c,d)=>c*d,1)
}