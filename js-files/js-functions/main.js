function convertMinutesToSeconds(minutes) {
    return minutes * 60;
}
console.log(convertMinutesToSeconds(5))

function greet(name) {
    console.log('Hey, ' + name)
    return 'Hey, ' + name
}
greet('Beevis')

function getArea(width, height) {
    console.log(width * height)
    return width * height;
}
getArea(17, 42)

function getFirstName(person) {
    console.log(person.firstName)
    return (person.firstName)
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })

function getLastElement(array) {
    let lastIndex = array.length - 1
    console.log(array[lastIndex])
    return array[lastIndex]
}
getLastElement(['propane', 'and', 'propane', 'accessories'])