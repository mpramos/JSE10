console.log()

let river = "Mekong";
let character = river.charAt(2);
console.log(character); // -> k


let str = "java script language";
console.log(str.length); // -> 20
console.log('test'.length); // -> 4

console.log(str.charAt(0)); // -> 'j'
console.log('abc'.charAt(1)); // -> 'b'

console.log(str.slice(0, 4)); // -> 'java'
console.log('test'.slice(1, 3)); // -> 'es'
console.log(str.slice(15, 19)); // -> 'es'

console.log(str.split(' ')); // -> ['java', 'script', 'language']
console.log('192.168.1.1'.split('.'));  // -> ['192', '168', '1', '1']




const str = String();
const num = Number();
const bool = Boolean();

console.log(str); // ->
console.log(num); // -> 0
console.log(bool); // -> false

const big1 = BigInt(42);
console.log(big1); // -> 42n

const big2 = BigInt();   // -> Uncaught TypeError: Cannot convert undefined to a BigInt



const num = 42;

const strFromNum1 = String(num);
console.log(strFromNum1);
console.log( typeof strFromNum1);

const strFromNum2 = String(8);
console.log(strFromNum2);
console.log(typeof strFromNum2);
const strFromBool = String(true);
console.log(strFromBool);
console.log(typeof strFromBool);
const numFromStr = Number("312");
console.log(numFromStr);
console.log(typeof numFromStr);
const boolFromNumber = Boolean(-34);
console.log(boolFromNumber);
console.log(typeof boolFromNumber);
    




let str = "text";
let strStr = String(str);
console.log(`${typeof str} : ${str}`); // -> string : text
console.log(`${typeof strStr} : ${strStr}`); // -> string : text

let nr = 42;
let strNr = String(nr);
console.log(`${typeof nr} : ${nr}`); // -> number : 42
console.log(`${typeof strNr} : ${strNr}`); // -> string : 42

let bl = true;
let strBl = String(bl);
console.log(`${typeof bl} : ${bl}`); // -> boolean : true
console.log(`${typeof strBl} : ${strBl}`); // -> string : true

let bnr = 123n;
let strBnr = String(bnr);
console.log(`${typeof bnr} : ${bnr}`); // -> bigint : 123
console.log(`${typeof strBnr} : ${strBnr}`); // -> string : 123

let un = undefined;
let strUn = String(un);
console.log(`${typeof un} : ${un}`); // -> undefined : undefined
console.log(`${typeof strUn} : ${strUn}`); // -> string : undefined

let n = null;
let strN = String(n);
console.log(`${typeof n} : ${n}`); // -> object : null
console.log(`${typeof strN} : ${strN}`); // -> string : null


//! Number

console.log(Number(42)); // -> 42

console.log(Number("11")); // -> 11
console.log(typeof Number("11")); // -> 11
console.log(Number("0x11")); // -> 17
console.log(typeof Number("0x11")); // -> 11
console.log(Number("0o11")); // -> 9
console.log(typeof Number("0o11")); // -> 11
console.log(Number("0b11")); // -> 3
console.log(typeof Number("0b11")); // -> 11
console.log(Number("12e3")); //  -> 12000
console.log(typeof Number("12e3")); // -> 11
console.log(Number("Infinity"));// -> Infinity
console.log(typeof Number("Infinity")); // -> 11
console.log(Number("text")); // -> NaN
console.log(typeof Number("text")); // -> 11


console.log(Number(true)); // -> 1
console.log(Number(false)); // -> 0

console.log(Number(undefined)); //  -> NaN

console.log(Number(null));// -> 0

console.log(Number(14n)); // -> 14
console.log(Number(123456789123456789123n)); // - >  123456789123

console.log(Number(true)); // -> 1
console.log(Number(false)); // -> 0

console.log(Number(undefined)); //  -> NaN

console.log(Number(null));// -> 0


//! Boolean
console.log(Boolean(true)); // -> true

console.log(Boolean(42)); // -> true
console.log(Boolean(0)); // -> false
console.log(Boolean(NaN)); // -> false

console.log(Boolean("texto")); // -> true
console.log(Boolean("")); // -> false

console.log(Boolean(undefined)); // -> false

console.log(Boolean(null)); // -> false
    



//! Numeros grandes
console.log(BigInt(11)); // -> 11n
console.log(BigInt(0x11)); // -> 17n
console.log(BigInt(11e2)); // -> 1100n

console.log(BigInt(true)); // -> 1n

console.log(BigInt("11")); // -> 11n
console.log(BigInt("0x11")); // -> 17n

console.log(BigInt(null)); // -> Uncaught TypeError: Cannot convert null to a BigInt

console.log(BigInt(undefined)); // -> Uncaught TypeError: Cannot convert undefined to a BigInt

console.log(BigInt(NaN)); // -> Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer
    














    

