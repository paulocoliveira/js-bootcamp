//student score, total possible score
//15/20 -> You got a C (75%)!
//A 90-100, B= 80-89, C 70-79, D 60-69, E 0-59  

let gradeCalc = function(studentScore, totalPossibleScore){
    let grade = undefined
    let percentual = (studentScore / totalPossibleScore) * 100
    if (percentual >= 90){
        grade = 'A'
    } else if (percentual >= 80){
        grade = 'B'
    } else if (percentual >= 70){
        grade = 'C'
    } else if (percentual >= 60){
        grade = 'D'
    } else if (percentual <=59){
        grade = 'F'
    }
    console.log(`You got a ${grade} (${percentual}%)!`)
}

gradeCalc(100,100)

