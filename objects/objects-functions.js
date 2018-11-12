let myBook1 = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326    
}

let myBook2 = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723    
}   

let getSummary = function(book){
    return{
        authorSummary: `${book.title} by ${book.author}.`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let book1Summary = getSummary(myBook1)
let book2Summary = getSummary(myBook2)

console.log(book1Summary.pageCountSummary)

//Challenge Area
// Create function - take Fahrenheit in - return object with all three

let getConversion = function(fahrenheit){
    return{
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5/9),
        kelvin: (fahrenheit + 459.67) * (5/9)
    }
}

let conversion = getConversion(32)

console.log(conversion)
