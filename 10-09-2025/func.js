function passed (list) { 

  return list.filter(a=>a < 19).length == 0 ? "No pass scores registered." : Math.round(list.filter(a=>a < 19).reduce((a,c)=>a+c,0) / list.filter(a=>a < 19).length)

} 
// Description:
// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

// Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


// Example:

// [10,10,10,18,20,20] --> 12