/* Callback Functions
--------------------------------------------- */
function primary(anotherFunction) {
    anotherFunction('my arg')
}

function secondary(param) {
    console.log('Hello from secondary, this is my parameter:', param)
}

// Using a pre-defined function as a callback
primary(secondary)

// Passing an anonymous function as a callback
// primary(function () { ('Hello from anonymous') })
// primary(() => console.log('Hello from anonymous'))


/* Callback Functions - addEventListener
--------------------------------------------- */
const btn = document.querySelector('button')
btn.addEventListener('click', e => {
    console.log('You clicked the button, this is information abotu the click event:', e)
})


/* .map method
--------------------------------------------- */
// The original array
const nums = [1, 2, 3]
// The new array made with transofrmed values of the original array
const squared = nums.map(num => num * num)

const instructors = ['Beryl', 'Hunter', 'Joe', 'Jurgen', 'Ben', 'David']
const awesome = instructors.map(instructor => `${instructor} is awesome`)


/* .filter method
--------------------------------------------- */
const boolArr = [true, false, true, false, false, true]
const trueArr = boolArr.filter(item => item)
const falseArr = boolArr.filter(item => !item)
console.log(trueArr)
console.log(falseArr)

const randArr = [true, false, 0, 'string', '', null, undefined, 42]
const truthyArr = randArr.filter(item => item)
const falseyArr = randArr.filter(item => !item)
console.log(truthyArr)
console.log(falseyArr)

const arrWithNulls = [1, 0, true, null, false, 'some string', null, null, null]
const arrWithoutNulls = arrWithNulls.filter(item => item !== null)
console.log(arrWithoutNulls)

const moreNums = [100, 2, 5, 42, null, 'a string', 99, 50.1]
const numsOver50 = moreNums.filter(num => num > 50)
console.log(numsOver50)

const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people'];
const notJerks = people.filter(person => person !== 'jerks')
console.log(notJerks)

/* .find method
--------------------------------------------- */
const students = ['Student 1', 'Student 2', 'Student 3', 'Student 110', 'Student 11']
const neededStudent = students.find(student => student.includes('11'))
console.log(neededStudent)

const cars = [
    { color: 'red', make: 'BMW', year: 2001 },
    { color: 'white', make: 'Toyota', year: 2013 },
    { color: 'blue', make: 'Ford', year: 2014 },
    { color: 'white', make: 'Tesla', year: 2016 }
];
const whiteCar = cars.find(car => car.color === 'white')
console.log(whiteCar)
const newestCar = cars.findIndex(car => car.year > 2015)
console.log(newestCar)


/* .some method
--------------------------------------------- */
const thingsInMyRoom = ['bed', 'lamp', 'table', 'random elephant', 'three tacos'];
const elephantinRoom = thingsInMyRoom.some(thing => thing === 'random elephant')
const isEverythingAnElephant = thingsInMyRoom.every(thing => thing === 'random elephant')
console.log(elephantinRoom)
console.log(isEverythingAnElephant)