//multiples arguments

let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//default arguments

let getScoreText = function(name = 'Anonymous', score = 0){
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//challenge area

let restauranteTip = function(total, tip = 0.2){
    return `A ${tip*100}% tip on R$${total} would be R$${total*tip}`
}

let tip = restauranteTip(120.00, 0.3)
console.log(tip)
