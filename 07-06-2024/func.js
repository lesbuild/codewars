var vampire_test = function(a, b){
    var original = String(a) + String(b),
        product = String(a * b);
    
    original = original.split('').sort().join('');
    product = product.split('').sort().join('');
    
    return product === original
  }