function countdown(number) {
    const result = []
    for (let i = number; i > 0; i--) {
        result.push(i)
    }
    return result
}
const countDown = countdown(10)
console.log('countDown', countDown)

function sumAll(numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
}
const sum = sumAll([1200, 1, 0])
console.log('sum all', sum)

function getIndexes(array) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result.push(i)
    }
    return result
}
const indexes = getIndexes(['meow', 'woof', 'squeak', 'shazoo'])
console.log('get indexes', indexes)

function addSuffixToAll(words, suffix) {
    const result = []
    for (let i = 0; i < words.length; i++) {
        result.push(words[i] + suffix)
    }
    return result;
}
const suffix = addSuffixToAll(['equal', 'abnormal', 'civil'], 'ity')
console.log('add suffix', suffix)

function getStudentsNames(students) {
    const result = []
    for (let i = 0; i < students.length; i++) {
        let student = students[i].name
        result.push(student)
    }
    return result
}

var students = [
    {
      name: 'Shrek'
    },
    {
      name: 'Donkey'
    },
    {
      name: 'Fiona'
    }
  ];

const studentNames = getStudentsNames(students)
console.log('students name', studentNames)

function filterOutNulls(values) {
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            result.push(values[i])
        }
    }
    return result
}
const filterNull = filterOutNulls([7, 8, null, 9])
console.log('filter out nulls', filterNull)

function filterOutStrings(values) {
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] !== 'string') {
            result.push(values[i])
        }
    }
    return result
}
const filterString = filterOutStrings([1, 'a', 'b', 2, 3, 'c'])
console.log('filter out strings', filterString)

function includeSeven(array) {
    let result = null
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 7) {
            result = false
        } else {
            return true
        }
    }
    return result
}
const seven = includeSeven([77, 200, 700, '7'])
console.log('includes seven', seven)

function findIndex(array, value) {
    let result = null
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        } else {
            result = -1
        }
    }
    return result
}
const index = findIndex([9, 8, 4], 4)
console.log('find index', index)

function oddOrEven(numbers) {
    const result = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push('even')
        } else {
            result.push('odd')
        }
    }
    return result;
}
const oddEven = oddOrEven([100, 121, 7])
console.log('odd or even', oddEven)