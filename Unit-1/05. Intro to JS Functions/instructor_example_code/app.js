/* Relating JS functions to algebra functions
------------------------------------------------- */
// 1. function definition
function simpleMath(x) {
    console.log("Your input was", x)
    const y = 2 * x + 2
    return y
}

// 2. calling the function
const answer = simpleMath(-3)
console.log("Your answer is", answer)



/* Simple function declaration
------------------------------------------------- */
simpleFunc()

function simpleFunc() {
    console.log("Hello from simpleFunc")
}

// for (let i = 1; i < 4; i++) {
//     simpleFunc()
// }



/* Simple function expression
------------------------------------------------- */
// regular function expression
const regFuncExpression = function () {
    console.log("this is a regular function expression")
}
regFuncExpression()


// arrow function expression
const funcExpression = () => {
    console.log("Hello from funcExpression")
}
funcExpression()



/* Parameters & Arguments
------------------------------------------------- */
// 1. When definging a function the placeholder input is called a "parameter"
const funcWithParams = function (param1, param2) {
    console.log(param1, param2)
}

// 2. When calling the function, the input is called an "argument". Arguments take the place of "parameters".
funcWithParams('arg1', 'arg2')


/* Using the return statement
------------------------------------------------- */
const calculateMean = (grade1, grade2, grade3, grade4, grade5) => {
    const sum = grade1 + grade2 + grade3 + grade4 + grade5
    return sum / 5
}
// const mean = calculateMean(80, 93, 67, 83, 100)
// console.log(mean)
const mean = calculateMean(60, 65, 67, 83, 100)

if (mean > 85) {
    console.log("You have an A!")
} else if (mean <= 85 && mean > 75) {
    console.log("You have a B!")
} else if (mean <= 75 && mean > 65) {
    console.log("You have a C!")
} else {
    console.log("You failed")
}