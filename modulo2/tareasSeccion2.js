//! Tarea 1

// Escribe un código que cree variables y las inicialice con valores Boolean, Number, 
// BigInt, String y tipos undefined usando (cuando sea posible) literales y funciones constructoras.

//? Usando Literales

let cadena = 'text'
let numero = 213
let isFalse = false
let numBigInt= 252525253535353n

console.log(
    `string : ${cadena} tipo de dato : ${typeof cadena} ,
    number : ${numero} tipo de dato : ${typeof numero} ,
    boolean : ${isFalse} tipo de dato : ${typeof isFalse} ,
    bigInt : ${numBigInt} tipo de dato : ${typeof numBigInt}`
    );
    
    //? Usando Funciones constructoras
    let cadena1 = String()
    let numero1 = Number()
    let isFalse1 = Boolean()
    let numBigInt1= BigInt(3)
        
    //! Tarea 2
    //? Imprime todos los valores y todos los tipos de esos valores usando console.log.
    //?  Intenta usar la interpolación de cadenas para mostrar el valor y el tipo al mismo 
    //?  tiempo con una sola llamada a console.log.       
        console.log(
            `string : ${cadena1} tipo de dato : ${typeof cadena1} ,
            number : ${numero1} tipo de dato : ${typeof numero1} ,
            boolean : ${isFalse1} tipo de dato : ${typeof isFalse1} ,
            bigInt : ${numBigInt1} tipo de dato : ${typeof numBigInt1}`
            );

//! Tarea 3

//? Realizar una cadena de conversiones: crear un Boolean a partir
//?  de un BigInt creado a partir de un Number que se creó a partir
//?  de un String . Comienza con el valor "1234". ¿Es posible?

let str="1234" //"1234"
let num=Number(str) // 1234
let bigInt=BigInt(num) // 1234n
let bool= Boolean(bigInt) // true

console.log(bool);

//! Tarea 4

//? Intenta agregar dos valores del mismo tipo y verifica el tipo de resultado. 
//? Pruébalo para todos los tipos primitivos.


let a = 500 + 200
let b = true + false 
let c = true + true
let d = 10n + 70n
let e = "hello" + "world"
let f = undefined + undefined
let g = null + null

console.log(
    `a : ${a} tipo de dato : ${typeof a}
     b : ${b} tipo de dato : ${typeof b}
     c : ${c} tipo de dato : ${typeof c}
     d : ${d} tipo de dato : ${typeof d}
     e : ${e} tipo de dato : ${typeof e}
     f : ${f} tipo de dato : ${typeof f}
     g : ${g} tipo de dato : ${typeof g}
    `
);


//! Tarea 5

//? Prueba sumar dos valores de diferentes tipos y verifica los resultados.

let a = 500n + 200n
let b = true + 20 
let c = true + null
let d = 10 + undefined
let e = "hello" + true
let f = undefined + null
let g = null + 10

console.log(
    `a : ${a} tipo de dato : ${typeof a}
     b : ${b} tipo de dato : ${typeof b}
     c : ${c} tipo de dato : ${typeof c}
     d : ${d} tipo de dato : ${typeof d}
     e : ${e} tipo de dato : ${typeof e}
     f : ${f} tipo de dato : ${typeof f}
     g : ${g} tipo de dato : ${typeof g}
    `
);


//! Tarea 6
//?Intenta modificar la línea const str1 = 42 + "1"; para obtener el resultado 43 
//? (sin eliminar las comillas alrededor del 1 ).

const str1 = 42 + +"1"
console.log(str1);


let numeritos = +'2'
console.log( typeof numeritos);












