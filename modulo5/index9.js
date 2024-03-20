let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');



//! CALLBACKS ASINCRONAS


    let inner = function() {
    console.log('inner 1');
    }

    
    let outer = function(callback) {
    console.log('outer 1');
    setTimeout(callback, 3000) /*ms*/;
    console.log('outer 2');
    }
    
    console.log('test 1');
    outer(inner);
    console.log('test 2');


let suma = function (a,b) {
    return a+b
}
let resta = (a,b) => a-b

console.log(resta(9,7));
console.log(suma(2,3));

setTimeout(() => 
    console.log('esto es un setTimeout')
, 3000);