function metuBalansas(selector, data) {

    console.log(data);
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (let i; i < data.length; i++) {
        console.log(i);
        HTML += `
    <div class="table-head">
                    <div class="cell">${i.month}</div>
                    <div class="cell">${i.name}</div>
                    <div class="cell">${i.income}</div>
                    <div class="cell">${i.expense}</div>
                    <div class="cell">Balansas</div>
                </div>`;
    }
    DOM.innerHTML = HTML;

}

export { metuBalansas }