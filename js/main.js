import { account } from './data.js';
import { month } from './data.js';

function balansas() {
    account.sort(function (a, b) { return a.month - b.month });
    console.log(account);
    let balansas = 0;
    for (let i = 0; i < account.length; i++) {
        balansas += Number(account[i].income) - Number(account[i].expense);
        console.log(i + 1, " ", month[i], "; Pajamos: ", account[i].income, "; Islaidos:", account[i].expense, "; balansas: ", balansas);
    }
}

balansas();
/*
for (const month of data) {

}
for (let i = 0; i < month.length; i++) {
    month[i] = month[i - 1];
    account = month[i]

bb
}
*/