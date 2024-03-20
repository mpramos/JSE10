function getTrue() {
    return true
}

// let test = getTrue();
// console.log(test); // -> true
console.log(getTrue());
function add(first, second) {
    return first + second;
    }
console.log(add(7,2));    



function getElement(elements, index) {
    return elements[index];
    }

let names = ["Alice", "Bob", "Eve", "John"];
let name = getElement(names, 2);
console.log(name); // -> Eve