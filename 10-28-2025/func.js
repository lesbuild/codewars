function fightOddEven(arr){
    let odd = arr.filter(a=>a%2==1).reduce((b,c)=>b+c,0);
    let even = arr.filter(d=>d%2==0).reduce((e,f)=>e+f,0);
    return odd > even ? "Odd wins!" : even > odd ? "Even wins!" : "Equal match!"
}

// Description:

// Make two groups of numbers odd and even.

// Sum all odd numbers and sum all even numbers.

// Check which group have superior advantage, make a message "Odd wins!" if odd is 

// greater than even or "Even wins!" if even has more than odd or "Equal match!" if it's

// tied.

// fightOddEven([1,2,3]) => "Odd wins!"

// fightOddEven([1,2,3,2]) => "Equal match!"