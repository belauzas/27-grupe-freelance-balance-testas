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
    for (let i = 0; i < account.length; i++) {
        monthIncome = isNaN(account[i].income) ? 0 : account[i].income;
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

    document.querySelector('#tableFooter').innerHTML =
        `<div class="cell"></div>
                    <div class="cell"></div>
                    <div class="cell">${income} Eur</div>
                    <div class="cell">${expense} Eur</div>
                    <div class="cell">${balance} Eur</div>`;
    document.querySelector('#tableContent').innerHTML = tableContent;



}

balansas();
