function easterHunt(str) {
    const eggFound = [...str.matchAll(/\((\d+)\)/g)];
    return eggFound.map(m => m[1]).reduce((a,b)=>Number(a)+Number(b));
}

// Description:

// Find all the number inside an egg "(number)" and sum it all up.

// easter("(23)asd12(2)")=>25