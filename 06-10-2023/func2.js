var findAverage = function (nums) {
    let total = 0
    
    for(let i =0;i < nums.length;i++){
      total += nums[i]
    }
    return nums.length != 1 ? total/ nums.length : nums[0]
  }