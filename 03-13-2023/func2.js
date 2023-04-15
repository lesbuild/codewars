function solution(string) {
    string =  string.split('').map(function(element){
        if(element == element.toUpperCase()){
          element = ' ' + element
        }
        return element
    } )
        return string.join('')
}