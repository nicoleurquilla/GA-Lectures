/* Equality Operator
-------------------------------------- */
console.log(3 === 3)
console.log(3 === 4)


/* Branching Control Flow
-------------------------------------- */
let userLoggedIn = true

// checking the value of a variable
if (userLoggedIn) {
    console.log("You're logged in")
} else {
    console.log("You're not logged in")
}

// checking the "truthiness" (truthfulness) of the relationship
if (2 > 1) {
    console.log("Yes, 2 is more than 1")
} else {
    console.log("No, the condition is false")
}


// checking the truthiness of a piece data
if (1) {
    console.log("This evaluates to true")
} else {
    console.log("This evaluates to false")
}


// checking multiple possibilites
const salary = 50000

if (salary < 50000 || salary === 50000) {
    console.log("Lower tax bracket")
} else if (salary > 50000 && salary <= 200000) {
    console.log("middle tax bracket")
} else {
    console.log("higher tax bracket")
}


// checking if things are not equal
let var1 = "a"
let var2 = "b"

if (var1 !== var2) {
    console.log("The variables are not equal")
} else {
    console.log("The variables are equal")
}


/* Looping
-------------------------------------- */
for (let i = 10; i >= -10; i -= 2) {
    // I can put any code in here and it will run every time my for loop iterates...
    console.log(i)
}


// while (new Date().getDay() === 2) {
//     alert("Store is closed today, you're welcome to browse but you can't buy!")
// }