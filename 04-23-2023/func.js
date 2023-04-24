function getMiddle(s)
{
  return s.length % 2 == 0 ? s.substring(Math.round(s.length / 2) - 1, Math.round(s.length / 2) + 1) : 
          s.substring(s.length / 2, s.length / 2 + 1)
  
}