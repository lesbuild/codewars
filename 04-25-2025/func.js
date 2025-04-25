function expandedForm(num) {
    let  result = []
    let [a, b] = String(num).split('.')
    for (let i = 0; i < a.length; i++) {
      if (+a[i]) result.push(a[i] + '0'.repeat(a.length - i - 1)) ;
    }
    for (let j = 0; j < b.length; j++) {
      if (+b[j]) result.push(b[j] + '/1' + '0'.repeat(j + 1));
    }
    return result.join(' + ')
  }