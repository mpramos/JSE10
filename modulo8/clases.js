class Person{
constructor(firstName = 'Maria',lastName ='Vargas',age=50,country='Bolivia',city='La Paz'){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
}
getFullName (){
    const fullName = `${this.firstName} ${this.lastName}`
    return fullName
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
