let values = [10, 30, 50,100];
let sumaElementos = 0 

for (let indice = 0;  indice <= values.length -1; indice++) {
    console.log(values[indice]);
    // sumaElementos = sumaElementos + values[indice]
    sumaElementos += values[indice]

}
console.log(sumaElementos);