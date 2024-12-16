function alphabetWar(fight){
  
    const pts = {w:-4, p:-3, b:-2, s:-1, m:4, q:3, d:2, z:1}
    
    var warPts = fight.replace(/[^*]?\*[^*]?/g, '').split('').reduce((a,b) => a + (pts[b] || 0), 0);
    
    return warPts ? (warPts < 0 ? 'Left' : 'Right') + ' side wins!' : 'Let\'s fight again!';
    
  }