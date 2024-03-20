
function resta(a,b) {
    if ( (typeof(a) && typeof(b)) === 'number' ) {
        return a - b
    }else{
        return 'Los valores enviados no son válidos'
    }

}
console.log(resta(5,2))









function getMeanTemp(temperatures) {
    if (!(temperatures instanceof Array)) {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20
