function checkPassword(str){
    let str_replace =  str.replace(/[A-Za-z\d@$!%*?&]/gi,"")
    return str_replace.length > 0 ? `"${str_replace}" is not allowed` :
           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(str)
}

// Description: 

// Validate password with the following:

// At least one lower case letter, at least one upper case letter, at least one Number, at least one special character from this "@$!%*?&" and at least 10 characters long.