function circleArea(radius) {
    // Check if the radius is positive
    if (radius <= 0) {
      throw new Error('Radius must be positive')
    }
  
    // Calculate the area of the circle
    const area = Math.PI * radius * radius
  
    // Round the area to the nearest hundredth
    return Math.round(area * 100) / 100
  }