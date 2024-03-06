// Valores falsy
// 0 false ''
// 828282 true 'asdasdasdasd'





let operando1='hola'
let operando2=null
console.log(operando1);
console.log(operando2);
console.log('*------------------------*');
let operando3= operando1 + ' ' + operando2
console.log(operando3);
console.log(typeof operando3);


let operando='hola a todos'
let operando_otro= operando + 'que tal?'
console.log(operando + operando_otro);



let operando4 = 'Hola'
operando4 +=' '
operando4 +='Mundo'
operando4 +=' '
operando4 +='que tal'

console.log(operando4);
//! OPERADORES DE COMPARACIÓN 

// Igualdad Estricta
// Igualdad



//! Igualdad
console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false

//! Igualdad Estricta

console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false


//! Desigualdad estricta
console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true
//! Desigualdad
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 !=  false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true


console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "hola"); // -> true


console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true

console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true


console.log(typeof ['hola','a','todos','como','estan']);
console.log(typeof {
    nombre:'Mario',
    edad:38
});
console.log( ['hola','a','todos','como','estan'] instanceof Array);
console.log( {
    nombre:'Mario',
    edad:38
} instanceof Array);



console.log(true? "Alice" : "Bob"); // -> Alice
console.log(false? "Alice" : "Bob"); // -> Bob

let edad=17
let nombre = edad >= 18 ? "Mario": "No es menor de edad, no aplica"  
console.log(nombre);

//! Precedencia
let a = 10;
let b = a + 2 * 3;
let c = a + 2  < 20 - 15;
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> false
    











