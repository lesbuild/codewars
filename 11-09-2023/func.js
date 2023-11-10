function toTime(seconds) {
    let hour = Math.floor(seconds / 60 / 60)
    let min = Math.floor(seconds / 60 % 60)
    return `${hour} hour(s) and ${min} minute(s)`
  }