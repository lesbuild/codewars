function timeConvert(num) { 
    return num < 1 ? "00:00" : [Math.floor(num / 60).toString().padStart(2,0), 
                                (num % 60).toString().padStart(2,0) ].join(":")
}