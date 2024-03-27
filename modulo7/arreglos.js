const arr = Array()
console.log(arr);
const arr1 = []
console.log(arr1);


const numbers = [1,2,3.14,9.81]
console.log(numbers);
console.log(numbers.length);


const arr2= [
    'Mario',
    true,
    {pais:'Bolivia', ciudad :'La Paz'},
    {habilidades : ['HTML','CSS','JAVASCRIPT']}
]
console.log(arr2);



let js = 'javascript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript);


let companiesString = 'Facebook, Google, Microsoft, Apple, Oracle, Amazon'
const companias = companiesString.split(',')
console.log(companias);

let txt = 'Yo amo trabajar con JavaScript porque es un lenguaje que tiene muchos recursos y tiene una gran comunidad'
const words= txt.split(' ')
console.log(words);

const fruits = ['banana','naranja','mango','limon']
let firstFruit= fruits[0]
console.log(fruits)
console.log(firstFruit)
let secondFruit= fruits[1]
console.log(secondFruit)

let webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node'
]
console.log(webTechs);
console.log(webTechs.length);
console.log(webTechs[0]);


const _numbers =[1,2,3,4,5]
_numbers[0]=10
_numbers[1]=20
console.log(_numbers);


const countries = [
    'Bolivia',
    'Mexico',
    'Paraguay',
    'Chile',
    'Ecuador'
]

let lastIndex = countries.length -1
countries[lastIndex] = 'Korea'
console.log(countries);



const eightEmptyValues= Array(8).fill(0)
console.log(eightEmptyValues);


const firstList=[1,2,3]
const secondtList=[4,5,6]
const thirdList= firstList.concat(secondtList)
console.log(thirdList);
console.log(thirdList.length);

const _numbers =[1,2,3,4,'🎆']
console.log(_numbers.indexOf('🎆'));
console.log(_numbers.indexOf(1));


const _fruits = ['banana','naranja','mango','limon','banana']
// let index = _fruits.indexOf('banana')
// let index = _fruits.indexOf('banana')
 let index = _fruits.lastIndexOf('banana')
console.log(index);

if (index === -1) {
    console.log('Esta fruta no existe en nuestra colección');
} else {
    console.log('Esta fruta si existe en nuestra colección');
}

const __numbers =[1,2,3,4,5]
let number = 5
console.log(__numbers.includes(7));
console.log(__numbers.slice());
console.log(__numbers.slice(0));
console.log(__numbers.slice(0,__numbers.length));
console.log(__numbers.slice(1,4));
console.log(__numbers);
console.log(__numbers.splice(0,2));

// console.log(Array.isArray( __numbers));
console.log(Array.isArray( number));
console.log(__numbers.toString());

const names = ['Cecilia','Roberto','David','Susana']
console.log(names.join());
console.log(names.join(''));
console.log(names.join(' # '));
names.unshift('Patricia')
console.log(names);
names.pop()
names.shift()
console.log(names);
console.log(names.reverse());


console.log(names.sort());


const _firstNums =[1,2,3]
const _secondNums =[1,4,9]

const arrayOfArray = [[1,2,3],[1,2,3,4]]
console.log(arrayOfArray[0][1]);