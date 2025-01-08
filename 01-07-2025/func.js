function missingWord(nums, str) {
    let code = ""
    str = str.replaceAll(" ","")
    nums = nums.sort((a,b)=>a-b)
    for(let i = 0;i<nums.length;i++){
      if(str[nums[i]]){
        code += str[nums[i]]
      }
      else{
        return "No mission today"
      }
    }
    return code.toLowerCase()
  }