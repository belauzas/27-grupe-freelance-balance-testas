import { account } from './data.js';
import { month } from './data.js';

function balansas() {
    account.sort(function (a, b) { return a.month - b.month });
    console.log(account);
    let balance = 0;
    let income = 0;
    let expense = 0;
    let tableContent = '';
    let monthIncome = 0;
    let monthExpense = 0;
    let minIncome = 0;
    let maxIncome = 0;
    let minExpense = 0;
    let maxExpense = 0;
    for (let i = 0; i < account.length; i++) {
        monthIncome = isNaN(account[i].income) ? 0 : account[i].income;
        minIncome = monthIncome <= 0 ? minIncome : minIncome == 0 ? monthIncome : monthIncome < minIncome ? monthIncome : minIncome;
        maxIncome = maxIncome > monthIncome ? maxIncome : monthIncome;
        minExpense = monthExpense <= 0 ? minExpense : minExpense == 0 ? monthExpense : monthExpense < minExpense ? monthExpense : minExpense;
        maxExpense = maxExpense > monthExpense ? maxExpense : monthExpense;
        monthExpense = isNaN(account[i].expense) ? 0 : account[i].expense;
        income += monthIncome
        expense += monthExpense;
        balance += monthIncome - monthExpense;
        tableContent += `<div class="table-row">
            <div class="cell">${i + 1}</div>
            <div class="cell">${month[i]}</div>
            <div class="cell">${monthIncome} Eur</div>
            <div class="cell">${monthExpense} Eur</div>
            <div class="cell">${monthIncome - monthExpense} Eur</div>
        </div>`

    }
    console.log(minIncome);
    console.log(maxIncome);
    console.log(minExpense);
    console.log(maxExpense);


    let incomeSort = account.filter(m => { return m.income > 0 })
    const minIncomeMonth = month[incomeSort.sort(function (a, b) { return a.income - b.income })[0].month - 1];
    const maxIncomeMonth = month[incomeSort.sort(function (a, b) { return b.income - a.income })[0].month - 1];
    console.log(minIncomeMonth);
    console.log(maxIncomeMonth);

    let expenseSort = account.filter(m => { return m.expense > 0 })
    const minExpenseMonth = month[expenseSort.sort(function (a, b) { return a.expense - b.expense })[0].month - 1];
    console.log(minExpenseMonth);
    const maxExpenseMonth = month[expenseSort.sort(function (a, b) { return b.expense - a.expense })[0].month - 1];
    console.log(maxExpenseMonth);

    document.querySelector('#tableFooter').innerHTML =
        `<div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell">${income} Eur</div>
                    <div class="cell">${expense} Eur</div>
                    <div class="cell">${balance} Eur</div>`;
    document.querySelector('#tableContent').innerHTML = tableContent;

    document.querySelector('#minIncome').innerText = minIncomeMonth;
    document.querySelector('#maxIncome').innerText = maxIncomeMonth;
    document.querySelector('#minExpense').innerText = minExpenseMonth;
    document.querySelector('#maxExpense').innerText = maxExpenseMonth;
}

balansas();
