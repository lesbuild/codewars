function simpleExchange(arr) {
    for(let i = 0;i<s.length;i++){
        let temp = s[i]
        if(i % 2 == 0){
            let temp = s[i]
            s.splice(i,1,s[i+1])
            s.splice(i+1,1,temp)
        }
    }
    return arr
}

// Simple exchange of odd and even of their closest index of an array

// Note: All arrays are even in size

// simpleExchange([1,2,3,4]) => ([2,1,4,3])