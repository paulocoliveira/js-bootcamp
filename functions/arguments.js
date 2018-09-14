//multiples arguments

let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//default arguments

let getScoreText = function(name, score){
    console.log(name)
    console.log(score)
}

getScoreText()