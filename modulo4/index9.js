let usuarios = ['maria','susana','carlos','david']

let usuario1=usuarios[0]
console.log(usuario1);
let usuario2=usuarios[1]
console.log(usuario2);
let usuario3=usuarios[2]
console.log(usuario3);
let usuario4=usuarios[3]
console.log(usuario4);
// 0, 10, 20, 30, 40, 50, 60, 70, 80 y 90
console.log(0);
console.log(10);
console.log(20);
console.log(30);
console.log(40);
console.log(50);
console.log(60);
console.log(70);
console.log(80);
console.log(90);


let n = 0;

console.log(n); // -> 0
n += 10;
console.log(n); // -> 10
n += 10;
console.log(n); // -> 20
n += 10;
console.log(n); // -> 30
n += 10;
console.log(n); // -> 40
n += 10;
console.log(n); // -> 50
n += 10;
console.log(n); // -> 60
n += 10;
console.log(n); // -> 70
n += 10;
console.log(n); // -> 80
n += 10;
console.log(n); // -> 90
n += 10;
let n1 = 0;
while(n1 < 91) {
    console.log(n1); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n1 += 10;// n1=n1+10
}
let limpioCuarto= false
let contador = 0
while (!limpioCuarto) {
    console.log('sin play ');
    contador++
    if (contador===3) {
        limpioCuarto=true
    }
}


