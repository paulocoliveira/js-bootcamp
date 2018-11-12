let myAccount = {
    name: 'Paulo Oliveira',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount){
    account.expenses = account.expenses + amount
    console.log(account)
}

//Challenge Area

//addIncome(account, amount)

let addIncome = function(account, amount){
    account.income = account.income + amount
    console.log(account)
}

//reserAccount > expenses and incomes to zero

let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
    console.log(account)
}

//getAccountSummary > Account for Paulo Oliveira has $900. $1000 in income. $100 in expenses.

let getAccountSummary = function(account){
    console.log(`Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`)
}

//addIncome
addIncome(myAccount, 1000)

//addExpense
addExpense(myAccount, 200)

//addExpense
addExpense(myAccount, 200)

//getAccountSummary
getAccountSummary(myAccount)

//resetAccount
resetAccount(myAccount)

//getAccountSummary
getAccountSummary(myAccount)