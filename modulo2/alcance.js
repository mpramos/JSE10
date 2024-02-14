let global='global'
console.log(global);

let counter;
console.log(counter); // -> undefined
{
    counter = 1;
    console.log(counter); // -> 1
}
counter = counter + 1;
console.log(counter); // -> 2
    


let luz
let agua 

{
    console.log(agua);
    let cocina = '1 cocina '
    let baño = '2 baños '    
    let dormitorios = '4 dormitorios '
    console.log(cocina,baño,dormitorios);    
}
{
    agua='agua '
    let baño = '1 baño '    
    let cocina = '1 cocina '
    console.log(agua);
    let dormitorios = '2 dormitorios '    
    console.log(cocina,baño,dormitorios);    
}
{
    let cocina = '1 cocina'
    let dormitorios = '2 dormitorios '    
    let baño = '1 baños '    
    console.log(agua);
    console.log(cocina,baño,dormitorios);    
}

 // ! DEFINIR UN NOMBRE GRUPO
let gas 
{
    let baño = '2 baños'
    let cocina = '2 cocinas'
    let dormitorios ='5 dormitorios'
    let patio = '1 patio'
    console.log(gas);
    console.log(baño, cocina, dormitorios,patio);
}
{
    let patio = '2 patios'
    console.log(gas);

}





















