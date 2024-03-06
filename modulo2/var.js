var height = 180;
{
    var weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70   
}
{
    console.log(height);
    height = 200
}
console.log(height); // -> 180
console.log(weight); // -> 70
    

console.log(window);