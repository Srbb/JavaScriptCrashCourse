/*
    Based on the Youtube video by Brad Traversy
    @ "https://www.youtube.com/watch?v=hdI2bqOjy3c&t=6s"
*/

//Rarely use
//  alert('Hello world!')
//mostly use:
console.log("Hello world!")

// var, let and const
var a = 10 // dont use
let b = 5 // usefull for changing values
const c = 6 // constant value, initialized

// Data Types: String, Number, Boolean, null, undeined, Symbol
const names = "Serbi Buzgau"
const age = 24
const rating = 4.5
const isCool = true
const x = null
const y = undefined
let z;
// console.log(typeof(z))

// Strings:
// Concatenation
console.log("My name is " + names + " and I am " + age + " years old.")
console.log(`My name is ${names} and I am ${age}.`)
//Methods
console.log(names.length)
console.log(names.toLowerCase())
console.log(names.toUpperCase())
console.log(names.substring(0,3))
console.log(names.split(" "))

// Arrays:
const numbers = new Array(1,2,3,4,5)
console.log(numbers)
const fruits = ["apples", "oranges", "pears"]
console.log(fruits[1])
fruits[3] = "grapes"
console.log(fruits)
fruits.push("mangos")
console.log(fruits)
fruits.unshift("strawberries")
console.log(fruits)
fruits.pop()
console.log(fruits)
console.log(Array.isArray(fruits))
console.log(fruits.indexOf("oranges"))

//Object literals
const person = {
    firstName: "john",
    lastName: "dow",
    age: 20,
    hobbies: ['music', 'movies', 'lego'],
    address: {
        street: "lala Land",
        city: 'New York',
        state: "Happiness"
    }
}
console.log(person, person.lastName)
//Destructuring
const { firstName, lastName} = person
console.log(firstName, lastName)
//
person.email  = 'haha@gmail.com'
console.log(person)

//Array of Objects
const todos = [
    {
        id:1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'meeting',
        isCompleted: true
    },
    {
        id:3,
        text: 'medical exam',
        isCompleted: false
    },
]
console.log(todos[1].text)

//Json??
const todoJson = JSON.stringify(todos)
console.log(todoJson)

//For loops
for(let i = 0; i<10; i++){
    console.log(i)
}
//While loops















