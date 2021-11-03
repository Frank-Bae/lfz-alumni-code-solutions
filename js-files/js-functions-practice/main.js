function getAverageOfTwoNumbers(x, y) {
    let result = (x + y) / 2
    return result
};
const averageOfTwo = getAverageOfTwoNumbers(5, 6)
console.log('average of two ', averageOfTwo)

function getAverageOfThreeNumbers(x, y, z) {
    let result = (x + y + z) / 3
    return result
};
const averageOfThree = getAverageOfThreeNumbers(5, 6, 7);
console.log('average of three', averageOfThree)


function getRightTriangleArea(base, height) {
    let result = (base * height) / 2
    return result
};
const rightTriangleArea = getRightTriangleArea(3, 4);
console.log('right triangle area', rightTriangleArea)

function getSquareNumber(number) {
    let result = Math.pow(number, 2)
    return result
};
const squareNumber = getSquareNumber(9);
console.log('square number', squareNumber)

function getSumOfSquares(x, y) {
    let resultOne = Math.pow(x, 2)
    let resultTwo = Math.pow(y, 2)
    let totalResult = resultOne + resultTwo;
    return totalResult
}
const sumOfSquares = getSumOfSquares(3, 8)
console.log('sum of squares', sumOfSquares)


function getAreaOfCircles(radius) {
    let result = radius * radius * Math.PI
    return result
}
const areaOfCircles = getAreaOfCircles(3);
console.log('area of circles', areaOfCircles)


function getFirstElement(array) {
    let result = array[0]
    return result
}
const FirstElement = getFirstElement([4, 3, 2, 1]);
console.log('first element', FirstElement)

function getSecondELement(array) {
    let result = array[1]
    return result
}
const secondElement = getSecondELement([4,3,2,1]);
console.log('second element', secondElement)

function getElementAtIndex(array, index) {
    let result = array.splice(2, 1).toString()
    return result
}
const elementAtIndex = getElementAtIndex(['i', 'tell', 'you', 'what'], 2);
console.log('element at index', elementAtIndex);

function getLengthOfArray(array) {
    let result = array.length;
    return result
}
const lengthOfArray = getLengthOfArray(['i', 'tell', 'you', 'what']);
console.log('length of array', lengthOfArray)

function getLastElement(array) {
    let lastIndex = array.length - 1
    let result = array.splice(lastIndex, 1).toString()
    return result
}
const lastElement = getLastElement(['i', 'tell', 'you', 'what']);
console.log('last element', lastElement);


function getFirstCharacter(string) {
    let result = string[0]
    return result
}
const firstCharacter = getFirstCharacter('he who shall not be named')
console.log('first character', firstCharacter)

function getSecondCharacter(string) {
    let result = string[1]
    return result
}
const secondCharacter = getSecondCharacter('he who shall not be named')
console.log('second character', secondCharacter)

function getCharacterAtIndex(string, index) {
    let result = string[index]
    return result
}
const characterAtIndex = getCharacterAtIndex('he who shall not be named', 17);
console.log('character at index', characterAtIndex);

function getLengthOfString(string) {
    let result = string.length
    return result
}
const lengthOfString = getLengthOfString('he who shall not be named');
console.log('length of string', lengthOfString);

function getLastCharacter(string) {
    let lastString = string.length -1;
    let result = string[lastString]
    return result
}
const lastCharacter = getLastCharacter('he who shall not be named');
console.log('last character', lastCharacter)


var lea = {
    firstName: 'Lea',
    lastName: 'Verou'
};
var leaProfile = {
    name: 'Lea Verou',
    occupation: 'software developer',
    birthPlace: 'Lesbos, Greece'
}; 
var tim = {
    name: 'Tim Berners-Lee',
    occupation: 'computer scientist',
    birthPlace: 'London, England'
};


function getLastNameOfPerson(person) {
    let result = person.lastName
    return result
}
const lastNameOfPerson =  getLastNameOfPerson(lea)
console.log('last name of person', lastNameOfPerson)
 

  function getFullNameOfPerson(person) {
      let result = person.firstName + ' ' + person.lastName
      return result
  }
  const fullNameOfPerson = getFullNameOfPerson(lea);
  console.log('full name of person', fullNameOfPerson)

  function getDescriptionOfPerson(person) {
      let result = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace;
      return result
  }
    const descriptionOfPerson = getDescriptionOfPerson(leaProfile)
    console.log('description of person', descriptionOfPerson)

    const descriptionOfPersonTwo = getDescriptionOfPerson(tim)
    console.log('description of person', descriptionOfPersonTwo)
  

  function getFirstInitialOfPerson(person) {
      let result = person.firstName[0]
      return result
  }
  const firstInitialOfPerson = getFirstInitialOfPerson(lea)
  console.log('get first initial of person', firstInitialOfPerson)
  

  function getInitialsOfPerson(person) {
      let result = person.firstName[0] + person.lastName[0]
      return result
  }
  const initialOfPerson = getInitialsOfPerson(lea)
  console.log('initial of person', initialOfPerson)

  function getPropertyValue(object, key) {
      let result = object[key]
      return result
  }
  const propertyValue = getPropertyValue(leaProfile, 'occupation')
  console.log('property value', propertyValue)
  