
//! forEach


for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
console.log(sum);

let numbers =[1,2,3,4,5]
let sum = 0
// numbers.forEach(num=> sum = sum + number[i])

numbers.forEach(num=> sum += num)
console.log(sum);

const countries = ['Bolivia','Paraguay','Chile','Argentina']
countries.forEach(country => {
   console.log(country.toLowerCase()); 
});


//!map

for (let i = 0; i < _numbers.length; i++) {
    let cuadrado = _numbers[i]**2 
    console.log(cuadrado);   
}
const _numbers = [1,2,3,4,5]
let cuadrados = _numbers.map(num => num*num)
console.log(cuadrados);
console.log(_numbers);

const _names = ['mario','juana','esteban','carlos']
const _namesToUpperCase= _names.map( name=> name.toUpperCase())
console.log(_namesToUpperCase);
console.log(_names);

const _countriesToUpeerCase= _countries.map(country=> country.toUpperCase())
console.log(_countriesToUpeerCase);
console.log(_countries);

const _countries = [
    'Peru',
    'Bolivia',
    'Argentina',
    'Chile'
]
const _countriesFirstThreeLeteers= _countries.map(country=> country.toUpperCase().slice(0,3))
console.log(_countriesFirstThreeLeteers);

//! filter

const __countries = [
    'Peru',
    'Bolivia',
    'Argentina',
    'Chile'
]

const countriesHaveFiveLetters=__countries.filter(country=> country.length === 5)
console.log(countriesHaveFiveLetters);

const countriesEndsa = __countries.filter(country=> country.endsWith('a'))
console.log(countriesEndsa);
console.log(__countries);
const countriesContainI= __countries.filter( country => country.includes('i'))
console.log(countriesContainI);
console.log(__countries);

const scores = [
    {name: 'Juana', score: 95},
    {name: 'Susana', score: 98},
    {name: 'Carlos', score: 80},
    {name: 'Rodrigo', score: 50},
    {name: 'Esteban', score: 85},
    {name: 'Juan', score: 100},
]

const scoresGreaterEighty= scores.filter(score=> score.score > 80)
console.log(scoresGreaterEighty);

//! reduce
// let _sum =0
// for (let index = 0; index < ___numbers.length; index++) {
    //     _sum += ___numbers[index];
    // }
    // console.log(_sum);
    
    const ___numbers=[1,2,3,4,5]
    let _mult=___numbers.reduce((mult,number)=> number*mult,1)
    console.log(_mult);
    let _sum=___numbers.reduce((sum,number)=> number+sum,0)
    console.log(_sum);
    //! every
    
    let isValid= true
    for (let i = 0; i < __names.length; i++) {
        if (typeof __names[i] === 'string' ) {
        } else {
            isValid = false            
        }
    }
    console.log(isValid);
    
    const __names= ['adriana','susana','carla','esteban',1]
    const areAllStr = __names.every( name=> typeof name === 'string')
    console.log(areAllStr);
    
    const bool =[true, true, true, true]
    const areAllBolTrue= bool.every(b=> b ===true)
    console.log(areAllBolTrue);
    
    //! find
    
    
    
    let age
    for (let i = 0; i < ages.length; i++) {
        if (ages[i]<20) {
            age = ages[i]        
        } 
    }
    console.log(age);
    
    const ages = [24,22,25,32,35,19,18]
    const _age = ages.find(age=> age<20 ) 
    console.log(_age);
    
    const ___names=['Paola','Carlos','Esteban','Juana']
    
    const result = ___names.find( name=>name.length > 5)
    console.log(result);
    
    const _scores = [
        {name: 'Juana', score: 95},
        {name: 'Susana', score: 98},
        {name: 'Carlos', score: 80},
        {name: 'Rodrigo', score: 50},
        {name: 'Esteban', score: 85},
        {name: 'Juan', score: 100},
    ]
    
    const score = _scores.find(user=> user.score > 80)
    console.log(score);
    //! findIndex
    
    let index
    let limit = false
    for (let i = 0; i < $names.length; i++) {
        if ($names[i].length > 5 && limit === false) {
            index = i
            limit = true
        } 
    }
    console.log(index);
    
    const $names = ['mario','juana','esteban','carlos']
    const _result= $names.findIndex(name=>name.length>5)
    console.log(_result);
    
    //!some
    let isString = false
    for (let i = 0; i < nombres.length; i++) {
        if (typeof nombres[i] === 'string' && !isString) {
            isString = true
        } 
    }
    console.log(isString);
    
    const nombres = ['carlos',1,3,34,34]
    const areSomeStr = nombres.some(nombre=> typeof nombre === 'string')
    console.log(areSomeStr);
    
    
    
    
    
    
    