import { account } from './data.js'
import { transformIncome, transformExpense } from './footer.js'


function findMinIncome() {
    const monthCount = account.length
    let income = transformIncome();
    let expense = transformExpense();
    let allHistory = []


    for (let i = 0; i < monthCount; i++) {
        allHistory.push(income[i] - expense[i])
    }
    console.log(allHistory);

    const sortProfit = allHistory.sort((a, b) => a - b)
    console.log(sortProfit);
}

export { findMinIncome }