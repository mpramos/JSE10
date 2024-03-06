console.log( 'hola' +2);
console.log(  2+ 'hola');
console.log(  2+ '2');
console.log(2+4);

//!Operadores aritmeticos
const x = 'hola';
const y = 2;

console.log("suma: ", x + y); // -> 7
console.log("resta: ", x - y); // -> 3
console.log("multiplicación: ", x * y); // -> 10
console.log("división: ", x / y); // -> 2.5
console.log("residuo de la división: ", x % y); // -> 1
console.log("potencia: ", x ** y); // -> 25

//!Operadores Unarios
let str = "123";
let n1 = +str; // -> +123 
let n2 = -str;// -> -123
let n3 = -n2; //-> -(-123) = 123
let n4 = +"abcd"; // ->  Nan

console.log(`${str} : ${typeof str}`); // -> 123 : string 
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number


//!Operqadores unarios y decremento 
let n1=2
console.log(n1++); //
console.log(n1); //
console.log(++n1); //-> n=n+1

console.log(0.2 + 0.1);     // 0.30000000000000004
console.log(0.2 * 0.1);     // 0.020000000000000004
console.log(0.3 / 0.1);     // 2.9999999999999996



let n2 = 10;
let n1 = 10;

console.log(n1); // -> 10
console.log(n1++); // -> 10
console.log(n1); // -> 11

console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

let n3 = 20;
let n4 = 20;

//?Operador sufijo
console.log(n3); // -> 20
console.log(n3++); // -> 20
console.log(n3); // -> 21
console.log(n3++); // -> 21
console.log(n3); // ->22

//?Operador prefijo
console.log(n4); // -> 20
console.log(++n4); // -> 21
console.log(n4); // -> 21
console.log(++n4); // -> 22
console.log(n4); // -> 22

//?Operador sufijo
console.log(n3); // -> 20
console.log(n3--); // -> 20
console.log(n3); // -> 21

//?Operador prefijo
console.log(n4); // -> 20
console.log(--n4); // -> 21
console.log(n4); // -> 21

//!Operadores de Asignación Compuesta

let x = 1
x += 100;
console.log(x);
// x = x +1000 //-> x = 0 + 1000 //-> x=1000
let x = 10;

x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4





const a = false;
const b = true;
const c = false;
const d = true;
console.log(b && d);
console.log(a && d);


console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false




let nr = 0;
let year = 1970;
let nombre = "Alice";
let empty = "";


console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!nombre); // -> false
console.log(!empty); // -> true

console.log(!!nr); // -> false
console.log(!!nombre); // -> true

// 0, '',false -> FALSOS ❌
// 1212,v 'ana', true ✔

console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string


console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob
//! Operadores lógicos y valores no booleanos - continuación


let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0


//!Operadores de Asignación Compuesta logicos
let a = true;
console.log(a); // -> true
a &&= false;
// a = a && false
console.log(a); // -> false


