import { account } from './data.js'

const allIncome = document.getElementById('income')
const allExpems = document.getElementById('expense')
const allyear = document.getElementById('allYear')

function allYearCount(data) {
    const itemCount = data.length;
    const expenseArray = transformExpense();
    const incomeArray = transformIncome();
    let allYearIncome = 0;
    let allYearExpense = 0;


    for (let i = 0; i < itemCount; i++) {
        allYearIncome += incomeArray[i]
        allYearExpense += expenseArray[i]
    }


    allIncome.innerHTML = allYearIncome + 'Eur';
    allExpems.innerHTML = allYearExpense + 'Eur';
    allyear.innerHTML = allYearIncome - allYearExpense + 'Eur';
}

function transformExpense() {
    let expense = []
    const itemCount = account.length;
    for (let i = 0; i < itemCount; i++) {
        if (typeof account[i].expense !== 'number') {
            expense.push(0)
        } else {
            expense.push(account[i].expense)
        }
    }
    return expense;
}


function transformIncome() {
    let income = []
    const itemCount = account.length;
    for (let i = 0; i < itemCount; i++) {
        if (typeof account[i].income !== 'number') {
            income.push(0)
        } else {
            income.push(account[i].income)
        }
    }
    return income;
}

export { allYearCount }
export { transformExpense }
export { transformIncome }