function isUnderFive(number) {
    if (number < 5) {
        return true
    } else {
        return false
    }
}

function isEvenNumber(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

const numbersArray = [5, 10, 4]
numbersArray.forEach(number => {
    const underFive = isUnderFive(number)
    const evenNumber = isEvenNumber(number)
    console.log('under five', underFive, number)
    console.log('even number', evenNumber, number)
})

function startsWithJ(string) {
    if (string[0].toString() === 'J') {
        return true
    } else {
        return false
    }
}

stringsArray = ['Javascript', 'PHP', 'HTML', 'JAVA', 'Kotlin', 'C#'];
stringsArray.forEach(string => {
    const startingWithJ = startsWithJ(string)
    console.log('starts with J', startingWithJ, string)
})

function isOldEnoughToDrink(person) {
    if (person.age < 21) {
        return false
    } else {
        return true
    }
}
let bart = {
    name: 'Bartholomew JoJo Simpson',
    age: 10
}
const oldEnoughToDrink= isOldEnoughToDrink(bart)
console.log('old enough to drink', oldEnoughToDrink)

function isOldEnoughToDrive(person) {
    if (person.age < 16) {
        return false
    } else {
        return true
    }
}
let homer = {
    name: 'Homer Jay Simpson',
    age: 39
};
const oldEnoughToDrive = isOldEnoughToDrink(homer)
console.log('is old enough to drive', oldEnoughToDrive)

function categorizeAcidity(ph) {
    if (ph === 7) {
        return 'neutral'
    } else if (ph < 7 && ph > 0) {
        return  'acid'
    } else if (ph > 7 && ph < 14) {
        return 'base'
    } else {
        return 'invalid ph level'
    }
}

const phLevel = [-1, 14.00001, 7, 2, 9]
phLevel.forEach(ph => {
    const level = categorizeAcidity(ph)
    console.log('oh level', level, ph)
})

function introduceWarnerBro(name) {
    if (name === 'yakko') {
        return "We're the warner brothers!"
    } else if (name === 'wakko') {
        return "We're the warner brothers!"
    } else if (name === 'dot') {
        return "I'm cute~"
    } else {
        return 'goodnight everybody'
    }
}

const namesArray = ['yakko', 'wakko', 'dot', 'Cody', 'minerva']
namesArray.forEach(name => {
    const introduceWarner = introduceWarnerBro(name)
    console.log('introduce warner bros', introduceWarner, name)
    }
)