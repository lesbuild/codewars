function findAreaOfCircle(a,b,c){
    let semi_per = (a+b+c)/2
    let area_triangle = Math.sqrt(semi_per * ((semi_per - a) * (semi_per - b) * (semi_per - c)))
    let radius_circle = area_triangle / semi_per
    return `Area of the circle inside the triangle is ${Math.PI.toFixed(2) * Math.pow(radius_circle,2)}`
}

// Description: 

// Find the area of a circle inside a triangle given all sides.

// findAreaOfCircle(3,4,5) => 3.14