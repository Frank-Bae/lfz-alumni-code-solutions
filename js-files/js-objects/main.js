// dot notation
const student = {
    firstName: 'Frank',
    lastName: 'Bae',
    Age: 28
}
const fullName = student.firstName + ' ' + student.lastName
console.log('value of fullName:', fullName)

student.livesInIrvine = false;
student.previousOccupation = 'Angular dev at Bizurk LOL'
console.log('value of student.livesInIrvine:', student.livesInIrvine)
console.log('value of student.previousOccupation:', student.previousOccupation)
console.log('value of student', student)

//bracket notation

const vehicle = {
    make: 'Hyundai',
    model: 'Santa Fe',
    year: 2013
}
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle ["color"]', vehicle['color'])
console.log('value of vehicle ["isConvertible"]', vehicle['isConvertible'])
console.log('value of vehicle', vehicle)


// delete operator
const pet = {
    name: 'Dug',
    type: 'dog'
}
delete pet.name;
delete pet.type;
console.log('value of pet', pet)