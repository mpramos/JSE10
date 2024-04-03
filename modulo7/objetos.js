
const person = {
    firstName: 'Juana',
    lastName:'Ramirez',
    age:50,
    country:'Peru',
    skills:[
        'HTML',
        'CSS',
        'JS',
        'React',
        'Node',
        'MongoDb'
    ],
    getFullName : function () {
        return `${this.firstName} ${this.lastName}`
    },
    isMarried: true,
    'phone number':'324234234234'
}
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.location);
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);
console.log(person['location']);

console.log(person['phone number']);
console.log(person.getFullName());

person.nationality = 'Peruan'
person.country = 'Argentina'
person.title = 'teacher'
person.skills.push('Express')

person.getPersonInfo = function () {
    let skillsWithoutLastSkill= this.skills.splice(0,this.skills.length-1).join(', ')
    let lastSkill = this.skills.splice(this.skills.length-1)[0]
    
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement =`${fullName} is a ${this.title}.\nShe lives in ${this.country}.\nShe teaches ${skills}.`
    return statement
}
console.log(person);
console.log(person.getPersonInfo());

const copyPerson = Object.assign(person)
console.log(copyPerson);

console.log('ARREGLO DE CLAVES');
const keys = Object.keys(copyPerson)
console.log(keys);
console.log('ARREGLO DE VALORES');
const values = Object.values(copyPerson)
console.log(values);
console.log('ARREGLO DE  CLAVES Y VALORES');
const entries = Object.entries(copyPerson)
console.log(entries);

console.log(copyPerson.hasOwnProperty('name'));
console.log(copyPerson.hasOwnProperty('score'));
console.log(copyPerson.hasOwnProperty('title'));