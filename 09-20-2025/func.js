function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(mName){
         return typeof obj[mName] == 'function';
  });
}