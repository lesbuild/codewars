function reminder(workTime) {
    if(workTime - 10 < 0) {
        workTime = 12 + workTime - 10;
    }
    return `Sleep before ${workTime} o'clock p.m.`;
}