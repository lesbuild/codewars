function findScreenHeight(width, ratio) {
    let height = ratio.split(":")[1] / ratio.split(":")[0] * width
    return `${width}x${height}`
 }