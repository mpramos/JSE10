/* JSON son las siglas de JavaScript Object Notation. La sintaxis JSON se 
deriva de la sintaxis de notación de objetos de JavaScript, pero el formato
 JSON es solo texto o cadena. JSON es un formato de datos ligero para almacenar 
 y transportar. JSON se utiliza principalmente cuando los datos se envían desde 
 un servidor a un cliente. JSON es una alternativa más fácil de usar a XML.*/

JSON.parse()
JSON.stringify()

const usertText =`{
    "users":[
        {
            "firstName":"Asabeneh",
            "lastName":"Yetayeh",
            "age":250,
            "email":"asab@asb.com"
          },
          {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
          },
          {
          "firstName":"Lidiya",
          "lastName":"Tekle",
          "age":28,
          "email":"lidiya@lidiya.com"
          }
    ]
}`
const userObj = JSON.parse(usertText,(key,value)=>{
        let newValue = 
        typeof value =='string' && key!='email' ? value.toUpperCase() : value
        return newValue

})
console.log(userObj);



const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  const txt = JSON.stringify(users, undefined, 10)
  console.log(txt) // text means JSON- because json is a string form of an object.


  const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }


  const txt1= JSON.stringify(user,['firstName','lastName','country','city','age','points'],4)
  console.log(txt1);