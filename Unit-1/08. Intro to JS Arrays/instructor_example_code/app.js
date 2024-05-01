/* Array length & indices
------------------------------------------------ */
const movies = [
    'Life is Beautiful',
    'The Secret Life of Walter Mitty',
    'Return of the King',
    'Bladerunner'
]
const arrayLength = movies.length
const lastItem = movies[movies.length - 1]
const lastIndex = movies.length - 1


/* Array manipulation
------------------------------------------------ */
// Does not work!
// movies = [
//     'Franklin and Friends',
//     'Spongebob Squarepants: the Movie'
// ]

// Works: you can manipulate individual items
console.log(movies)
movies[1] = 'Arrival'
console.log(movies)

// Add an element
movies.push('The Secret Life of Walter Mitty')
console.log(movies)

movies.unshift('The Two Towers')
console.log(movies)

// Add multiple elements
movies.push('Tenet', 'Dune')
console.log(movies)

// Removing a movie
movies.pop()
console.log(movies)

movies.shift()
console.log(movies)


/* Array manipulation using .splice()
------------------------------------------------ */
// Remove a specific element:
//     --> First arg is the index we are starting with
//     --> Second arg is the number of items we are replacing
movies.splice(3, 1)
console.log(movies)

// Remove multiple elements
movies.splice(1, 2)
console.log(movies)

// Replace an item
//     --> Third arg is the item we are inserting into the array
movies.splice(0, 1, 'La vita è bella')
console.log(movies)

// Add an item at a specific index
movies.splice(2, 0, 'The Return of the King')
console.log(movies)


/* Iterating over an Array
------------------------------------------------ */
// Conventional for loop
for (let i = 0; i < movies.length; i++) {
    console.log(i, movies[i])
}

// for...of loop
for (let movie of movies) {
    console.log(movie)
}

// forEach iterator method
movies.forEach(movie => console.log(movie))