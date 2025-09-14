// Exercises: Level 1
// Create a closure which has one inner function
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc)
console.log(innerFunc)
console.log(innerFunc)

// Exercises: Level 2
// Create a closure which has three inner functions
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function multiplyByTwo() {
    count *= 2   
    return count
    }

    return {
        plusOne,
        minusOne,
        multiplyByTwo
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);
console.log(innerFuncs.multiplyByTwo);
// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.