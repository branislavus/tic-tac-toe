function init(){
    render();
}

function generateCircleSVG() {
    return `<svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="#00B0EF" stroke-width="10" fill="none"
                      stroke-dasharray="251.2" stroke-dashoffset="251.2"
                      transform="rotate(-90 50 50)"
                      style="animation: draw 200ms linear forwards;" />
            </svg>`;
}

function generateCrossSVG() {
    return `<svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="20" x2="80" y2="80" stroke="#FFC000" stroke-width="10"
                      stroke-dasharray="85" stroke-dashoffset="85"
                      style="animation: draw 200ms ease-out forwards;" />
                <line x1="80" y1="20" x2="20" y2="80" stroke="#FFC000" stroke-width="10"
                      stroke-dasharray="85" stroke-dashoffset="85"
                      style="animation: draw 200ms ease-out forwards;" />
            </svg>`;
}

const circle = generateCircleSVG();
const cross = generateCrossSVG();
let fields = [ 
    null, null, null,
    null, null, null,
    null, null, null
];

function render() {
    let content = document.getElementById("content");
    let html = "<table>";
    for (let i = 0; i < 3; i++) {
        html += "<tr>";
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            let symbol = fields[index] || "";
            html += `<td id="cell-${index}" onclick="makeMove(${index})">${symbol}</td>`;
        }
        html += "</tr>";
    }
    html += "</table>";
    content.innerHTML = html;
}

function makeMove(index) {
    if (!fields[index]) {
        let count = fields.filter(field => field !== null).length;
        fields[index] = (count % 2 === 0) ? cross : circle;

        // Rendre nur das angeklickte Element mit der Animation
        const cell = document.getElementById(`cell-${index}`);
        cell.innerHTML = fields[index];  // Aktualisiere das Symbol
        cell.querySelector("svg").style.animation = "none";  // Entferne vorherige Animation
        cell.querySelector("svg").offsetHeight;  // Triggern der Reflow, um Animation zurückzusetzen
        cell.querySelector("svg").style.animation = "draw 200ms ease-out forwards"; // Starte Animation erneut
    }
}

function resetGame() {
    fields = [null, null, null, null, null, null, null, null, null];
    render();
}

render();