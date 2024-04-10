//! Promesas

console.log('tarea1');
console.log('tarea2');
console.log('tarea3');



console.log('tarea1');
setTimeout(() => {
    console.log('tarea2');
}, 2000);
console.log('tarea3');
const promise = new Promise((resolve,reject)=>{
    resolve('success')
    reject('failure')
})
console.log(promise);



const doPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // const skills = ['HTML','CSS','JS']
        const skills = []
        if (skills.length>0) {
            resolve(skills)
        } else {
            reject('No tenemos skills 😢')
        }
    }, 2000);
})
console.log(doPromise);
doPromise
.then(result=>{console.log(result)})
.catch(error=>{console.log(error)})

const _doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills =['HTML','CSS','JS','Node']
        if (skills.includes('Node')) {
            resolve('fullstack developer')
        } else {
            reject('no eres un fullstack developer 😢')
            
        }
    }, 2000);
})

_doPromise
.then(resultadito =>{console.log(resultadito)})
.catch(error =>{console.error(error)})


fetch(url)
.then(respuesta=> respuesta.json())
.then(data =>{
    console.log(data);
})
.catch(error => console.error(error))


const url = 'https://restcountries.com/v2/all'

const fetchData = async () =>{
try {
    const respuesta = await fetch(url)
    const countries = await respuesta.json()
    console.log(countries);
    console.log('hola');

} catch (error) {
    console.log(error);
}    
}
fetchData()

const _url = 'https://rickandmortyapi.com/api/character'
const fetchDataRickMorty = async ()=>{
try {
    const respuesta = await fetch(_url)
    const data = await respuesta.json()
    const  resultado = await data.results
    console.log(resultado);
} catch (error) {
    console.error(error);
}
}
fetchDataRickMorty()
