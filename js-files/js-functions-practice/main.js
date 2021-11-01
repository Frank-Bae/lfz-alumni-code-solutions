function getAverageOfTwoNumbers(x, y) {
    let result = (x + y) / 2
    console.log(result)
    return
};
getAverageOfTwoNumbers(5, 6);

function getAverageOfThreeNumbers(x, y, z) {
    let result = (x + y + z) / 3
    console.log(result)
    return
};
getAverageOfThreeNumbers(5, 6, 7);

function getRightTriangleArea(base, height) {
    let result = (base * height) / 2
    console.log(result)
    return
};
getRightTriangleArea(3, 4);

function getSquareNumber(number) {
    let result = Math.pow(number, 2)
    console.log(result)
    return
};
getSquareNumber(9);

 function getSumOfSquares(x, y) {
    let resultOne = Math.pow(x, 2)
    let resultTwo = Math.pow(y, 2)
    let totalResult = resultOne + resultTwo;
    console.log(totalResult)
    return
}
getSumOfSquares(3, 8)

function getAreaOfCircles(radius) {
    let result = radius * radius * Math.PI
    console.log(result)
    return
}
getAreaOfCircles(3)

function getFirstElement(array) {
    let result = array[0]
    console.log(result)
    return
}
getFirstElement([4, 3, 2, 1])

function getSecondELement(array) {
    let result = array[1]
    console.log(result)
    return
}
getSecondELement([4,3,2,1])

function getElementAtIndex(array, index) {
    let result = array.splice(2, 1)
    console.log(result.toString())
    return
}
getElementAtIndex(['i', 'tell', 'you', 'what'], 2)

function getLengthOfArray(array) {
    let result = array.length;
    console.log(result)
    return
}
getLengthOfArray(['i', 'tell', 'you', 'what'])

function getLastElement(array) {
    let lastIndex = array.length - 1
    let result = array.splice(lastIndex, 1)
    console.log(result.toString())
    return
}
getLastElement(['i', 'tell', 'you', 'what'])

function getFirstCharacter(string) {
    let result = string[0]
    console.log(result)
}
getFirstCharacter('he who shall not be named')

function getSecondCharacter(string) {
    let result = string[1]
    console.log(result)
}
getSecondCharacter('he who shall not be named')

function getCharacterAtIndex(string, index) {
    let result = string[index]
    console.log(result)
}
getCharacterAtIndex('he who shall not be named', 17)

function getLengthOfString(string) {
    let result = string.length
    console.log(result)
}
getLengthOfString('he who shall not be named')

function getLastCharacter(string) {
    let lastString = string.length -1;
    console.log(string[lastString]) 
}
getLastCharacter('he who shall not be named')

function getLastNameOfPerson(person) {
    console.log(person.lastName)
}
var lea = {
    firstName: 'Lea',
    lastName: 'Verou'
  };
  getLastNameOfPerson(lea)

  function getFullNameOfPerson(person) {
      console.log(person.firstName + ' ' + person.lastName)
  }
  var lea = {
    firstName: 'Lea',
    lastName: 'Verou'
  };
  getFullNameOfPerson(lea)

  function getDescriptionOfPerson(person) {
      console.log(person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace)
  }
  var lea = {
    name: 'Lea Verou',
    occupation: 'software developer',
    birthPlace: 'Lesbos, Greece'
  };
  getDescriptionOfPerson(lea)
  
  var tim = {
    name: 'Tim Berners-Lee',
    occupation: 'computer scientist',
    birthPlace: 'London, England'
  };
  getDescriptionOfPerson(tim)

  function getFirstInitialOfPerson(person) {
    console.log(person.firstName[0])
  }
  var lea = {
    firstName: 'Lea',
    lastName: 'Verou'
  };
  getFirstInitialOfPerson(lea)

  function getInitialsOfPerson(person) {
      console.log(person.firstName[0] + person.lastName[0])
  }
  var lea = {
    firstName: 'Lea',
    lastName: 'Verou'
  };
  getInitialsOfPerson(lea)

  function getPropertyValue(object, key) {
      console.log(lea[key])
  }
  var lea = {
    name: 'Lea Verou',
    occupation: 'software developer',
    birthPlace: 'Lesbos, Greece'
  };
  getPropertyValue(lea, 'occupation')