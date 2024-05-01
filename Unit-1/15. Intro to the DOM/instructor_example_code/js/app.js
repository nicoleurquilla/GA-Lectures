/* Selecting an element using querySelector
---------------------------------------------- */
const h1 = document.querySelector('h1')
console.dir(h1)

const paragraphElement = document.querySelector('.cool')
console.dir(paragraphElement)


/* Modifying text inside an element
---------------------------------------------- */
paragraphElement.innerText = 'New inner text'
paragraphElement.textContent = 'New text content'

// Checking for text inside an element
if (paragraphElement.textContent.length > 0) {
    console.log('The text content string has a length greater than 0')
}

if (paragraphElement.textContent !== '') {
    console.log('The text content string is not empty')
}

if (paragraphElement.textContent) {
    console.log("The string exists and therefore is truthy")
}


/* Modifying CSS styles inside an element
---------------------------------------------- */
// give the h1 a purple border
h1.style.border = '2px solid purple'

// center the text inside the h1 element
h1.style.textAlign = 'center'

// give the h1 a blue-gray background
h1.style.backgroundColor = 'steelblue'

// change the text color to white
h1.style.color = 'white'

paragraphElement.style.color = 'brown'
paragraphElement.style.fontSize = '20px'
paragraphElement.style.background = 'pink'
paragraphElement.style.fontStyle = 'italic'


/* Selecting multiple elements
---------------------------------------------- */
// using querySelectorAll
const commentElements = document.querySelectorAll('li')
console.log(commentElements)

// getElementsByClassName
const coolElements = document.getElementsByClassName('cool')
console.log(coolElements)

// getElementsByTagName
const liElements = document.getElementsByTagName('li')
console.log(liElements)


/* Iterating over multiple elements
---------------------------------------------- */
// using a for loop
// for (let i = 0; i < commentElements.length; i++) {
//     console.log(commentElements[i].innerText)
// }

// using a for...of loop
// for (let comment of commentElements) {
//     console.log(comment.innerText)
// }

// the forEach method
// commentElements.forEach(function (comment) {
//     console.log(comment.innerText)
// })

commentElements.forEach(comment => {
    comment.style.fontSize = '30px'
})


/* Interacting with HTML attributes
---------------------------------------------- */
const buttonEl = document.querySelector('button')

// check to see if an element has an attribute
if (buttonEl.hasAttribute('disabled')) {
    console.log('The button is disabled')
    // removing an attribute
    buttonEl.removeAttribute('disabled')
}

// setting an attribute
buttonEl.setAttribute('id', 'submit')


/* Interacting with the "class" attribute
---------------------------------------------- */
// const lastComment = document.querySelector('li:last-of-type')
const lastComment = commentElements[2]

// viewing the list of class names
console.log(lastComment.classList)

// add a class name
lastComment.classList.add('my-class')

// remove a class name
lastComment.classList.remove('yet-another-class')