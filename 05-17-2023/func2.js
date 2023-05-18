function distinct(a) {
    let unique = [];
    a.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;

}