function capital(capitals) {
    return capitals.map(function(el) {
      return 'The capital of ' + (el.state || el.country) + ' is ' + el.capital
    })
  }