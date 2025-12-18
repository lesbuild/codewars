function evenAndOdd(num){
  num = num.toString().split("")
  let odd = num.filter(a=>+a % 2==1).join("")
  let even = num.filter(a=>+a % 2 == 0).join("")
  return [+even, +odd];
}

// Description:
// Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:

// input	NE	NO
// 126453	264	153
// 3012	2	31
// 4628	4628	0
// 0 is considered as an even number.

// In C and JavaScript you should return an array of two elements such as the first is NE and the second is NO.