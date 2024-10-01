function exempleFunc(param : number | string) : number | string {
    if(typeof param === "number"){
        return param.toString()
    }else {
        return parseInt(param)
    }
}

console.log(exempleFunc(10));
console.log(exempleFunc("20"));
