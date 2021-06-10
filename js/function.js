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
        const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let HTML = ''


        for (let i = 0; i < itemCount; i++) {




            HTML += `<div class="table-row">
                                    <div class="cell">${this.data[i].month}</div>
                                    <div class="cell">${monthName[this.data[i].month - 1]}</div>
                                    <div class="cell">${this.data[i].income} Eur</div>
                                    <div class="cell">${this.data[i].expense} Eur</div>
                                    <div class="cell">150.00 Eur</div>
                                </div>`
        }

        this.DOM.innerHTML = HTML;




    }


}

export { function1 }