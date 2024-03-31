function getAges(sum,difference){
    return sum<0 || difference < 0 || sum < difference ? null : [(sum+difference)/2,(sum-difference)/2]
  };