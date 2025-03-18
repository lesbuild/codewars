function meeting(x, need){ 
    if (need == 0){
      return 'Game On'
    }
    let borrow = [];  
    for (let [ people, spareChairs ] of x) {
      spareChairs = Math.min(need, Math.max(0, spareChairs - people.length));
      borrow.push(spareChairs);
      need -= spareChairs;
      
      if (need == 0){
        return borrow
      }
    }
    return 'Not enough!';
  }