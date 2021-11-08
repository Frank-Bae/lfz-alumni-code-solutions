const mainArray = ['LearningFuze', 'paschal', 'HTML', 'code', 'String']
const mainArrayTwo = ['a', 'link', 'tO', 'ThE', 'pAsT']
const mainArrayThree = ['LearningFuze', 'Javascript', 'HTML', 'css', 'PHP']
const mainArrayFour = ['LearningFuze', 'zip-ties', 'Javascript', 'burgers', 'HTML']
const arrayIsVowel = ['L', 'f', 'Z', 'a', 'E', 'I', 'o', 'U']
console.log('main array', mainArray)

function getFirstChar(string) {
    return string[0]
}
mainArray.forEach(array => {
    const firstChar = getFirstChar(array)
    console.log('get first char', firstChar)
})

function getLastChar(string) {
    let lastIndex = string.length - 1
    return string[lastIndex]
}
mainArray.forEach(array => {
    const lastChar = getLastChar(array)
    console.log('get last char', lastChar)
})

function capitalized(word) {
    let result = ''
    for (let i = 0; i < word.length; i++) {
        if (i === 0) {
            result += (word[0].toUpperCase())
        } else {
            result += (word[i].toLowerCase())
        }
    }
    return result
}
mainArrayTwo.forEach(array => {
    const capital = capitalized(array)
    console.log('capitalized', capital)
})

function isUpperCased(word) {
    let wordUpperCased = word.toUpperCase()
    if (wordUpperCased === word) {
        return true
    } else {
        return false
    }
}
mainArrayThree.forEach(array => {
    const upperCased = isUpperCased(array)
    console.log('is upper cased', upperCased, array)
})

function isLowerCased(word) {
    let wordLowerCased = word.toLowerCase()
    if (wordLowerCased === word) {
        return true
    } else {
        return false
    }
}
mainArrayFour.forEach(array => {
    const lowerCased = isLowerCased(array)
    console.log('is lower cased', lowerCased, array)
})

function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let i = 0; i < vowels.length; i++) {
        if (char === vowels[i]) {
            return true
        } else {
            console.log('false')
        }

    }
}
arrayIsVowel.forEach(array => {
    const vowel = isVowel(array)
    console.log('is vowel', vowel, array)
})