const dave = { firstName: 'David', lastName: 'Thomas' }
const learningFuze = { latitude: 33.6349, longitude: 117.7405 }
const tim = { name: 'Tim', language: 'JavaScript' }

const mainArray = [
    {
        object: dave,
        key: 'firstName'
    },
    {
        object: dave,
        key: 'lastName'
    },
    {
        object: learningFuze,
        key: 'latitude'
    },
    {
        object: learningFuze,
        key: 'longitude'
    },
    {
        object: tim,
        key: 'age'
    },
    {
        object: tim,
        key: 'yeasExperience'
    }
]

function getValue(object, key) {
    return object[key]
}
mainArray.forEach(object => {
    const value = getValue(object.object, object.key)
    console.log('get value', value)
})


function setValue(object, key, value) {
    return object[key] = value
}
const setValueOne = setValue(dave, 'lastName', 'Thomas')
const setValueTwo = setValue(learningFuze, 'attitude', 'sanguine')
const setValueThree = setValue(tim, 'language', 'PHP')
console.log('set value', dave)
console.log('set value', learningFuze)
console.log('set value', tim)


function getKeys(object) {
    const result = []
    for (const property in object) {
        result.push(property)
    }
    return result
}
const getKeysOne = getKeys(dave)
const getKeysTwo = getKeys(learningFuze)
console.log('get keys', getKeysOne)
console.log('get keys', getKeysTwo)


function getValues(object) {
    const result = []
    for (const property in object) {
        result.push(object[property])
    }
    return result
}
const getValuesOne = getValues(dave)
const getValuesTwo = getValues(learningFuze)
console.log('get values', getValuesOne)
console.log('get values', getValuesTwo)

function toObject(keyValuePair) {
    if (keyValuePair.length !== 2) {
        return
    }
    const object = {}
    object[keyValuePair[0]] = keyValuePair[1]
    return object
}
const keyValue = toObject(['firstName', 'David'])
const keyValueTwo = toObject(['isCool', true])
const keyValueThree = toObject(['employer', 'LearningFuze'])
console.log('key value pair', keyValue)
console.log('key value pair', keyValueTwo)
console.log('key value pair', keyValueThree)