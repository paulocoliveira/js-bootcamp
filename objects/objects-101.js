let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326    
}

console.log(`${myBook.title} by ${myBook.author} has ${myBook.pageCount} pages`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author} has ${myBook.pageCount} pages`)

// Challenge Area
// name, age, location
// Andrew is 27 and lives in Philadelphia
// Increase the age by 1 and print the message again

let person = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)