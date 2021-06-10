function renderMonth(selector) {

    const DOM = document.querySelector(selector);
    let HTML = '';

    HTML += ` <div class="cell" id="month">Mėnuo
                <h4>Sausis</h4>
                <h4>Vasaris</h4>
                <h4>Kovas</h4>
                <h4>Balandis</h4>
                <h4>Gegužė</h4>
                <h4>Birželis</h4>
                <h4>Liepa</h4>
                <h4>Rugpjūtis</h4>
                <h4>Rugsėjis</h4>
                <h4>Spalis</h4>
                <h4>Lapkritis</h4>
                <h4>Gruodis</h4>
            </div> `;

    DOM.innerHTML = HTML;

}

export { renderMonth }
