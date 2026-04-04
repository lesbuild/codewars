function alternate(arr) {
    var result = [];
    let odd = arr.filter(a=>a%2==1).sort((b,c)=>b-c);
    let even = arr.filter(b=>b%2==0).sort((c,d)=>c-d);
    let maxLength = Math.max(odd.length,even.length)
    for (let i = 0; i < maxLength; i++) {
            if (i < odd.length) {
                result.push(odd[i]);
                }
            if (i < even.length){
                result.push(even[i]);
                }
    }
  return result;
}

// Description:

// Separate array into two groups which are odd and even then combine it aletrnately with odd then even. Sort the two arrays into ascending order before combining it.

// alternate([1,5,2,4])=>[ 1, 2, 5, 4 ]