const colors = ['red', 'white', 'blue']
console.log('value of colors[0]', colors[0])
console.log('value of colors[1]', colors[1])
console.log('value of colors[2]', colors[2])
let sentence = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.' 
console.log(sentence)

colors[2] = 'green'
let sentenceTwo = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.' 
console.log(sentenceTwo)
console.log('value of colors', colors)

const students = ['dave', 'king', 'kate', 'bob']
const numberOfStudents = students.length;
console.log('there are', numberOfStudents, 'students in the class')
const lastIndex = numberOfStudents -1;
const lastStudent = students[lastIndex]
console.log('the last student in the array is', lastStudent)
console.log('value of students', students)