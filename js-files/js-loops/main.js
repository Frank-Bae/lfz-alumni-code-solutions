function getNumbersToTen() {
    const numbers = [];
    let currentNumber = 1;
    for (let i = currentNumber; i <= 10; i++) {
        numbers.push(i)
    }
    return numbers
}
const numbersToTen = getNumbersToTen()
console.log('numbers to ten', numbersToTen)

function getEvenNumbersToTwenty() {
    const evenNumbers = [];
    const currentNumber = 2;
    for (let i = currentNumber; i <= 20; i+=2) {
        evenNumbers.push(i)
    }
    return evenNumbers
}
const evenNumbersToTwenty = getEvenNumbersToTwenty()
console.log('even numbers to twenty', evenNumbersToTwenty)

function repeatedWord(word, times) {
    let count = 1;
    let repeated = '';
    for (let i = 1; i < times; i++) {
        repeated += word
    }
    return repeated
}
const repeatWord = repeatedWord('javascript', 30)
console.log(repeatWord)

function logEachCharacter(string) {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i])
    }
}
const logCharacter = logEachCharacter('javascript')
console.log(logCharacter)

function doubleAll(numbers) {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
        
    }
}

function getKeys(object) {
    const keys = [];
    for (let key in object) {
        keys.push(key)
    }
    return keys
}

const keys = {
    isbn: '3434-2323-12-1-3',
    title: 'Speaking Js',
    author: 'Dr .Axel something'
}
const getKey = getKeys(keys)
console.log(getKey)