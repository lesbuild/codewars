function findFinishLine(arr, finishLine){
    let steps = arr.reduce((a,b)=>a+b)
    let line = finishLine.indexOf("*") + 1
    return  steps == line ? "Congratulations, you've reach the Finish Line!" : 
            steps > line ? "You went pass the Finish Line!" : "You were so close!"
}
// Goal is to reach the Finish Line exactly represented by "*"
// Message when you reach it exactly "Congratulations, you've reach the Finish Line!"
// Message when you came in short "You were so close!"
// Message when you pass it "You went pass the Finish Line!"