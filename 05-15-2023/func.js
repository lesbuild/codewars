function printerError(s) {
    let total = s.length
    let errors = s.match(/[n-z]/gi)
     return errors == null ? `0/${total}` : `${errors.length}/${total}`
}