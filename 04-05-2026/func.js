function easterHunt(str) {
    const regex = /\((\d+)\)/g;
    const matches = [...str.matchAll(regex)];
    return matches.map(m => m[1]).reduce((a,b)=>Number(a)+Number(b));
}

// Description:

// Find all the number inside an egg "(num)" and sum it all up.

// easter("(23)asd12(2)")=>25