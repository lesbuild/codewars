function processData(data){
    return data.map(a=>a.reduce((b,c)=>b-c)).reduce((e,f)=>e*f)
}