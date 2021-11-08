const mainArray = [['foo', 'bar', 'baz'], [1, 2, 3, 4, 5,], [false, true, false, true], []]
console.log('main array', mainArray)

function head(array) {
    return array[0]
}
mainArray.forEach(array => {
    const getHead = head(array)
    console.log('get head', getHead)
})

function last(array) {
    let lastIndex = array.length - 1
    return array[lastIndex]
}
mainArray.forEach(array => {
    const getLast = last(array)
    console.log('get last', getLast)
})

function tail(array) {
    let newArray = []
    if (array.length) {
        for (let i = 1; i < array.length; i++) {
            newArray.push(array[i])
        }
    } else {
        return []
    }
    return newArray
}
mainArray.forEach(array => {
    const getTail = tail(array)
    console.log('get tail', getTail)
})

function initial(array) {
    let newArray = []
    if (array.length) {
        for (let i = 0; i < array.length - 1; i++) {
            newArray.push(array[i])
        }
    } else {
        return []
    }
    return newArray
}
mainArray.forEach(array => {
    const getInitial = initial(array)
    console.log('get initial', getInitial)
})

function reverse(array) {
    let newArray = []
    if (array.length) {
        for (let i = array.length - 1; i >= 0; i--) {
            newArray.push(array[i])
        }
    } else {
        return []
    }
    return newArray
}
mainArray.forEach(array => {
    const getReverse = reverse(array)
    console.log('get reverse', getReverse)
})