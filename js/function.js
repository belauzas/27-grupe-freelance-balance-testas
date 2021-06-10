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

    transformIncome() {
        let income = []
        const itemCount = this.data.length;
        for (let i = 0; i < itemCount; i++) {
            if (typeof this.data[i].income !== 'number') {
                income.push(0)
            } else {
                income.push(this.data[i].income)
            }
        }
        return income;
    }

    transformExpense() {
        let expense = []
        const itemCount = this.data.length;
        for (let i = 0; i < itemCount; i++) {
            if (typeof this.data[i].expense !== 'number') {
                expense.push(0)
            } else {
                expense.push(this.data[i].expense)
            }
        }
        return expense;
    }


    render() {
        const itemCount = this.data.length;
        const monthName = ['sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis', 'lapkritis', 'gruodis']
        let HTML = ''
        const income = this.transformIncome();
        const expense = this.transformExpense();



        for (let i = 0; i < itemCount; i++) {

            HTML += `<div class="table-row">
                                    <div class="cell">${this.data[i].month}</div>
                                    <div class="cell">${monthName[this.data[i].month - 1]}</div>
                                    <div class="cell">${income[i]} Eur</div>
                                    <div class="cell">${expense[i]} Eur</div>
                                    <div class="cell">${income[i] - expense[i]} Eur</div>
                                </div>`
        }




        this.DOM.innerHTML = HTML;
    }


}

export { function1 }