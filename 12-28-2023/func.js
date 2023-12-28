function discoverOriginalPrice(discountedPrice, salePercentage){
    return Number(((discountedPrice * 100) / (100 - salePercentage)).toFixed(2))
  }