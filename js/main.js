import { account } from './data.js';
import { monthNames } from './data.js';

let DOM = document.getElementsByClassName('table-content');
console.log(DOM);
let balance = 0;
let HTML = '';

const generateHTML = (account, monthNames) => {
    for (let i = 0; i < account.length; i++) {
        const currentData = account[i];
        const monthNo = currentData['month'];
        const monthName = monthNames[monthNo];
        const monthIncome = currentData.hasOwnProperty('income') ? currentData['income'] : 0;
        const monthExpense = currentData.hasOwnProperty('expense') ? currentData['expense'] : 0;
        const monthIncomeFormated = monthIncome ? monthIncome.toString() + '.00 Eur' : '-';
        const monthExpenseFormated = monthExpense ? monthExpense.toString() + '.00 Eur' : '-';
        balance += monthIncome;
        balance -= monthExpense;
        const currentBalance = balance;


        HTML += `<div class="table-row">
                        <div class="cell">${monthNo}</div>
                        <div class="cell">${monthName}</div>
                        <div class="cell">${monthIncomeFormated}</div>
                        <div class="cell">${monthExpenseFormated}</div>
                        <div class="cell">${currentBalance}.00 Eur</div>
                    </div>`;
        console.log(HTML);

    }
    DOM.innerHTML = HTML;
}
generateHTML(account, monthNames);