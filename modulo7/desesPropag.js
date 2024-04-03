
const numbers = [1,2,3]

// let [numOne,numTwo,numThree] = numbers
let [numOne,,numThree] = numbers
console.log(numOne);
// console.log(numTwo);
console.log(numThree);

const names = [undefined,'juana','luis']
let [firstPerson = 'Maria',secondPerson,thirdPerson,fourthPerson='Juana'] = names
console.log(firstPerson);
console.log(secondPerson);
console.log(thirdPerson);
console.log(fourthPerson);
console.log(names);

const fullstack = [
    ['HTML','CSS','JS','React'],
    ['Node','Express','MongoDB']
]

for (const [first,second,third] of fullstack) {
    console.log(first);
    console.log(second);
    console.log(third);
}

const [frontend,backend]=fullstack
console.log(frontend);
console.log(backend);

const nums = [1,2,3,4,5,6,7,8,9,10]
let [num1,num2,num3,...rest] = nums
console.log(num1);
console.log(num2);
console.log(num3);
console.log(rest);
let [num4,num5,num6,...rest1] = rest
console.log(num4);
console.log(num5);
console.log(num6);
console.log(rest1);

const countries = [['Argentina','Chile','Bolivia'],['Buenos Aires','Santiago de Chile','La Paz']]
for (const [country,city] of countries) {
    console.log(country,city);
}

const rectangle = {
    width:20,
    height:10,
    area:200
}
let {width : w,height: h,area: a, perimeter:p = 60 } = rectangle
console.log(w);
console.log(h);
console.log(a);
console.log(p);
const rect = {
    width:20,
    height:10
}
const calculatePerimeter = ({width:w,height:h}) => {
    return  2*(w + h)
}

console.log(calculatePerimeter(rect));
const person ={
firstName: 'Juana',
lastName: 'Ramirez',
age: 50,
country: 'Peru',
job: 'Intructor and Developer',
skills: [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
],
languages : ['Español','Ingles','Frances']
}

const getPersonaInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) =>{
    const formattedSkills = skills.slice(0,-1).join(', ')
    const formattedLanguages = languages.slice(0,-1).join(', ')
    
    personInfo = `${firstName} ${lastName} lives in ${country}.She is ${age} years old.
    She is a ${job} She teaches ${formattedSkills} and ${skills[skills.length -1]}. She speaks
    ${formattedLanguages} and a  little bit of ${languages[2]}
    ` 
    return personInfo
}
console.log(getPersonaInfo(person));

const todoList =[
    {
        task: 'Matematica 1',
        time :'4/4/2024 8:30',
        completed: true
    },
    {
        task: 'Matematica 2',
        time :'5/4/2024 9:30',
        completed: false
    },
    {
        task: 'Matematica 3',
        time :'5/4/2024 10:30',
        completed: false
    }
]
for (const {task,time,completed} of todoList) {
    console.log(task,time,completed);
}

//! Spread Operator (...)

const _nums = [1,2,3,4,5,6,7,8,9,10]
let [_num1,_num2,_num3,..._rest] = _nums
console.log(_num1);
console.log(_num2);
console.log(_num3);
console.log(_rest);

const evens = [0,2,4,6,8,10]
const evenNumbers = [...evens]

evenNumbers.push('👀')

const odds = [1,3,5,7,9]
const oddsNumbers = [...odds]

console.log(evenNumbers);
console.log(evens);
console.log(oddsNumbers);

let wholeNumbers = [...evens,...odds]
console.log(wholeNumbers);

const _frontend = ['HTML','CSS','JS','React']
const _backend = ['Node','Express','MongoDB']
const _fullstack =[..._frontend,..._backend]
console.log(_fullstack);

const user ={
    name:'Juana',
    title:'Programmer',
    contry:'Peru',
    city:'Lima'
}
let copiedUser= {...user,title:'Instructor'}
console.log(copiedUser);
console.log(user);

const sumAllNums = (...args)=>{
            console.log(args);
}
sumAllNums(1,2,3,4,5,6,7,8,9,100)


