function renderMonth(selector) {

    const DOM = document.querySelector(selector);
    let HTML = '';

    HTML += ` <div class="cell" id="month">Mėnuo
                <h1>Sausis</h1>
                <h1>Vasaris</h1>
                <h1>Kovas</h1>
                <h1>Balandis</h1>
                <h1>Gegužė</h1>
                <h1>Birželis</h1>
                <h1>Liepa</h1>
                <h1>Rugpjūtis</h1>
                <h1>Rugsėjis</h1>
                <h1>Spalis</h1>
                <h1>Lapkritis</h1>
                <h1>Gruodis</h1>
            </div> `;

    DOM.innerHTML = HTML;

}

export { renderMonth }
