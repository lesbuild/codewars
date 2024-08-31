const orderFood = a => a.reduce( (acc,v) => ( acc[v.meal] = 
    ( acc[v.meal] || 0 ) + 1, acc ), {} );
    