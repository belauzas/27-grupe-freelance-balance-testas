class function1 {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = document.querySelector(this.selector)
        this.init()

    }

    init() {


        this.render()
    }


    render() {
        const itemCount = this.data.length;
        const monthName = ['sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis', 'lapkritis', 'gruodis']
        let HTML = ''
        let allYearIncome = 0;
        let allYearExpense = 0;



        for (let i = 0; i < itemCount; i++) {

            HTML += `<div class="table-row">
                                    <div class="cell">${this.data[i].month}</div>
                                    <div class="cell">${monthName[this.data[i].month - 1]}</div>
                                    <div class="cell">${this.data[i].income} Eur</div>
                                    <div class="cell">${this.data[i].expense} Eur</div>
                                    <div class="cell">${this.data[i].income - this.data[i].expense} Eur</div>
                                </div>`
            allYearIncome += this.data[i].income
            allYearExpense += this.data[i].expense
        }

        let leftMoney = allYearIncome - allYearExpense;


        this.DOM.innerHTML = HTML;
    }


}

export { function1 }