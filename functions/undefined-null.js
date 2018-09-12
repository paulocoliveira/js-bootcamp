//undefined for variables

let name

name = 'Paulo'

if (name === undefined){
    console.log('Please provide a name!')
} else{
    console.log(name)
}

//undefined for function arguments

let square = function(num){
    console.log(num)
}

square()

//undefined as function return default value
let result = square()

console.log(result)

//Undefined as assigned value
let age = 27
age = undefined
console.log(age)

//Null as assigned value
age = null
console.log(age)