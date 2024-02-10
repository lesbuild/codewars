function yearDays(year)
{
  if(year % 100 == 0){
    return year % 400 == 0 ? `${year} has 366 days` : `${year} has 365 days`
  }
  return year % 4 == 0 ? `${year} has 366 days` : `${year} has 365 days`
}