const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];


function sumOfMonth(income, expense) {
    return income - expense;
}


const pirmas = sumOfMonth(150)
const antras = sumOfMonth(200 - 50)
const trec = sumOfMonth(450 - 200)
const ketvirt = sumOfMonth(0 - 50)
const penkt = sumOfMonth(50)
const sest = sumOfMonth(150 - 50)
const septin = sumOfMonth(700 - 400)
const astun = sumOfMonth(10 - 300)
const devin = sumOfMonth(0 - 50)
const desimt = sumOfMonth(150 - 30)
const vienuolik = sumOfMonth(450 - 120)
const dvylikt = sumOfMonth(0 - 200)

export { account }