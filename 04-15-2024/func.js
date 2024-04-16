function evenOrOdd(str) {
    let even = str.split("").filter(a=>a%2==0).map(a=>parseInt(a)).reduce((a,b)=>a+b,0)
    let odd = str.split("").filter(a=>a % 2 == 1).map(a=>parseInt(a)).reduce((a,b)=>a+b,0)
    return even > odd ? 'Even is greater than Odd' : even < odd ? 'Odd is greater than Even'
                       : 'Even and Odd are the same'
  }