//!Objetos
let testObj = {
    nr: 600,
    str: "texto"
};


console.log(testObj.str);

let name1 = "Calvin";
let surname1 = "Hart";
let age1 = 66;
let email1 = "CalvinMHart@teleworm.us";
console.log(name1);

let name2 = "Mateus";
let surname2 = "Pinto";
let age2 = 21;
let email2 = "MateusPinto@dayrep.com";

let name3 = "Mateus1";
let surname3 = "Pinto1";
let age3 = 21;
let email3 = "Mateus1Pinto@dayrep.com";


let user1={
    name : "Calvin",
    surname : "Hart",
    age : 66,
    email : "CalvinMHart@teleworm.us"
}
console.log(user1.name);
let user2={
     name : "Mateus",
     surname : "Pinto",
     age : 21,
     email : "MateusPinto@dayrep.com"
   
}
console.log(user2.age);
console.log(user2.name);
user2.age = 22
user2.phone = '12313123123'
console.log(user2);

//! arreglos
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri

days[0] = "Sunday";
console.log(days[0]); // -> Sunday
console.log(days);

let emptyArray = [];
console.log(emptyArray[0]); // -> undefined


//? 
let eje1= 'silla'
console.log(eje1[3]);
eje1[3]='a'
console.log(eje1); // inmutable

let sillas = ['silla1','silla2','silla3']
console.log(sillas[2]);
sillas[3] = 'silla4'
console.log(sillas); // mutable


let emojis = ['👀','👍','😎']
console.log(emojis[2]);

let users =[ 
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];

console.log(users[0].name); // -> Calvin
console.log(users[1].name); // -> 21
users[2] = {
     name: "Rolando",
     surname: "Chavez",
     age: 25,
     email: "RolandoChavez@dayrep.com"

 }   
console.log(users[2].age);



let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(typeof days); // -> object




let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sunday";

console.log(typeof days); // -> object
console.log(typeof day); // -> string

console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false





let names  = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

names[5] = "Amelia";
console.log(names.length); // -> 6

console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel", undefined, "Amelia"]
console.log(names[3]); // -> Samuel
console.log(names[4]); // -> undefined
console.log(names[5]); // -> Amelia


let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1
    




names.push("Amelia");
console.log(names.length); // -> 5
console.log(names); // - > ["Olivia", "Emma", "Mateo","Samuel", "Amelia"]
    


let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.length); // -> 4
names.unshift("⭐")
names.unshift("⭐⭐")
names.unshift("⭐⭐⭐")
console.log(names);

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.length); // -> 4
names.push("⭐")
names.push("⭐⭐")
names.push("⭐⭐⭐")
console.log(names);
names.pop()
names.pop()
names.pop()
console.log(names);

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.length); // -> 4
names.push("⭐")
names.push("⭐⭐")
names.push("⭐⭐⭐")
console.log(names);
names.shift()
names.shift()
console.log(names);



let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names);
names.reverse();
console.log(names); // -> ["Samuel", "Mateo", "Emma", "Olivia"]









let names = ["Olivia", "Emma", "Mateo", "Samuel"];

let n1 = names.slice(2);
console.log(n1); // -> ["Mateo", "Samuel"]

let n2 = names.slice(1,3);
console.log(n2); // -> ["Emma", "Mateo"]

let n3 = names.slice(0, -2);
console.log(n3); // -> ["Olivia", "Emma", "Mateo"]

let n4 = names.slice(-1);
console.log(n4); // -> ["Samuel"]



let names = ["Olivia", "Emma", "Mateo", "Samuel"];
let otherNames = ["William", "Jane"];
let allNames = names.concat( otherNames);

console.log(names); // -> ["Olivia", "Emma", "Mateo", "Samuel"]
console.log(otherNames); // -> ["William", "Jane"]
console.log(allNames); // -> ["Olivia", "Emma", "Mateo","Samuel", "William", "Jane"]
    














    

