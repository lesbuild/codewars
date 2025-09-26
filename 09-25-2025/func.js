function roots(a,b,c){
  return b*b - 4*a*c < 0 ? null : Math.round(((-b + Math.sqrt((b*b)-(4*a*c)))/(2*a) + (-b - Math.sqrt((b*b)-(4*a*c)))/(2*a)) * 100) / 100
}
// Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any possible roots. Otherwise return None/null/nil/nothing. If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. There will always be valid arguments.