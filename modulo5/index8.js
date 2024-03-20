
// 6!=6 x 5 x 4 x 3 x 2 x 1 = 720



function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

console.log(factorial(6)); // -> 720


// 6!=6 x 5 x 4 x 3 x 2 x 1 = 720
// 6!=6 x 5 x 4 x 3 x 2 x 1! = 720
// 6!=6 x 5 x 4 x 3 x 2! = 720
// 6!=6 x 5 x 4 x 3! = 720
// 6!=6 x 5 x 4!= 720
// 6!=6 x 5! = 720

//  5! = 5 x 4 x 3 x 2 x 1 = 120
//  4! = 4 x 3 x 2 x 1 = 24
//  3! = 3 x 2 x 1 = 6
//  2! = 2 x 1 = 2
//  1! =  1 




function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1; 
    // 6 x factorial(5) => 6 x 120
    // 5 x factorial(4) => 5 x 24
    // 4 x factorial(3) = 4 x 3 x 2 x 1 = 24
    // 3 x factorial(2) => 3 x 2 = 6
    // 2 x factorial(1) => 2
    // 1 => 1 
}




function add(a, b) {
    return a + b;
}


let myAdd = add;
console.log(myAdd(10, 20));     // -> 30
console.log(add(10, 20));   // -> 30


console.log(factorial(6)); // -> 720
