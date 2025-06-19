function guessNumber(lives,guess,answer){
    if(guess == answer){
        return "Congratulation, you got the right number!"
    }
        lives--;
        guessNumber(lives,guess,answer)
    return `Sorry, the answer is ${answer}`
}