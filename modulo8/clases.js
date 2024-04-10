class Person{
constructor(firstName = 'Maria',lastName ='Vargas',age=50,country='Bolivia',city='La Paz'){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills=[]
}
getFullName (){
    const fullName = `${this.firstName} ${this.lastName}`
    return fullName
}
get getScore(){
    return this.score
}
get getSkills (){
    return this.skills
    
}
set setScore(score){
    this.score +=  score
}
set setSkills(skill){
    this.skills.push(skill)
}
getPersonInfo(){
    let fullName = this.getFullName()
    let skills= this.skills.length >0 && 
    this.skills.slice(0, this.skills.length-1).join(', ') +
    ` y ${this.skills[this.skills.length-1]}`
    let formattedSkills =  skills?`Sabe ${skills} ` : ''

    let info = `${fullName} tiene ${this.age} . Reside en ${this.city}, ${this.country}. ${formattedSkills}`
    return info
}
}

const person1 = new Person('Juana','Ramirez')
const person2 = new Person('Rosa','Fernandez')
const person3 = new Person('Juan','Arce')
const person4 = new Person()
console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person3.getFullName());
console.log(person4.getFullName());

console.log(person1.getScore);
console.log(person1.getSkills);

person1.setScore = 1
person1.setSkills = 'HTML'
person1.setSkills = 'CSS'
person1.setSkills = 'JS'

person2.setScore = 2
person2.setSkills = 'Planning'
person2.setSkills = 'Organizing'

console.log(person1.getScore);
console.log(person1.getSkills);
console.log(person1.getPersonInfo());
console.log(person2.getPersonInfo());


class Estudiante extends Person{
    saludar(){
       return 'Hola a todos';
    }
}
console.log('HIJOS ....');
let s1 = new Estudiante()
console.log(s1.saludar());