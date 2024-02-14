//Saludo de alumnos
mostrarElsaludo('Mario');

function mostrarElsaludo(nombre) {
    console.log(`Hola a todos `);
    console.log(`Soy ${nombre}`);
}



var globalGreeting = "Buenos";

function testFunction() {
    var localGreeting = "Días";  
    console.log("función:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();
console.log(localGreeting); // -> Uncaught ReferenceError: localGreeting is not defined

console.log("programa principal:");
console.log(globalGreeting);
    
// Sombreado

let counter = 100;
console.log(counter); // -> 100
{
   let counter = 200;
   console.log(counter); // -> 200
}
console.log(counter); // -> 200
 //
 var counter1 = 100;

function testFunction() {
    var counter1 = 200;  
    console.log(counter1);
}

console.log(counter1); // -> 100
testFunction(); // -> 200
console.log(counter1); // -> 100
    

var height = 180;
console.log(height);  // -> 180
var weight 

console.log(weight);  // -> Uncaught ReferenceError: weight is not defined
var weight = 30
console.log(weight);










 

























