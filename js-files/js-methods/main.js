const numOne = 10;
const numTwo = 20;
const numThree = 30;
const heroes = ['Gucci', 'Mike', 'Whisky', 'Zulu']

let maximumValue = Math.max(numOne, numTwo, numThree)
let randomNumber = Math.random()
randomNumber = randomNumber * heroes.length
let randomIndex = Math.floor(randomNumber)
let randomHero = heroes[randomIndex]

console.log('maximum Value', maximumValue)
console.log('random number', randomNumber)
console.log('randomIndex', randomIndex)
console.log('random heroes', randomHero)

library = [
    {
        title: 'You do know JS',
        author: 'Mozilla'
    },
    {
        title: 'You dont know Javascript',
        author: 'JRR Tolkein'
    },
    {
        title: 'water',
        author: 'h20'
    }
]

var js = {
    title: 'JavaScript for Impatient Programmers',
    author: 'Dr. Axel Rauschmayer'
  };
  var css = {
    title: 'CSS Secrets',
    author: 'Lea Verou'
  }

let lastBook = library.pop()
let firstBook = library.shift()
library.push(js)
library.unshift(css)
library.splice(1, 1)

console.log('last book', lastBook)
console.log('first book', firstBook)
console.log('library', library)

let fullName = 'Frank Bae'
let firstAndLastName = fullName.split(' ')
let firstName = firstAndLastName[0]
let sayMyName = firstName.toUpperCase()

console.log('first and last name', firstAndLastName)
console.log('say my name', sayMyName)