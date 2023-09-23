function slope(points)
{
  let x1 = points[0]
  let y1 = points[1]
  let x2 = points[2]
  let y2 = points[3]
  return x2 - x1 == 0 ? "undefined" : ((y2 - y1) / (x2 - x1)).toString()
}