var Calculator = {
    average: function() {
     return Array.prototype.slice.call(arguments).reduce(function(prev, next) {
       return prev + next
     }, 0) / (arguments.length || 1)
    }
   }