const allIncome = document.getElementById('income')
const allExpems = document.getElementById('expense')
const allyear = document.getElementById('allYear')

function allYearCount(data) {
    const itemCount = data.length;
    let allYearIncome = 0;
    let allYearExpense = 0;



    for (let i = 0; i < itemCount; i++) {
        allYearIncome += data[i].income
        allYearExpense += data[i].expense
    }


    allIncome.innerHTML = allYearIncome + 'Eur';
    allExpems.innerHTML = allYearExpense + 'Eur';
    allyear.innerHTML = allYearIncome - allYearExpense + 'Eur';
}

export { allYearCount }