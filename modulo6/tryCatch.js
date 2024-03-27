
try {
    let a = b;
} catch (error) {
    console.log(error); // -> ReferenceError: b is not defined
}
console.log("Hemos manejado la excepción"); // -> Hemos manejado la excepción
