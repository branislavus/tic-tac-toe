
const circle = "O";
const cross = "X";
let fields = [ 
    null, null, null,
    null, null, null,
    null, null, null
];

function init(){
    render();
}

function render() {
    let content = document.getElementById("content");
    let html = "<table>";
    for (let i = 0; i < 3; i++) {
        html += "<tr>";
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            html += `<td onclick="makeMove(${index})">${fields[index] || ""}</td>`;
        }
        html += "</tr>";
    }
    html += "</table>";
    content.innerHTML = html;
}

function makeMove(index) {
    if (!fields[index]) {
        let count = 0;
        for (let i = 0; i < fields.length; i++) {
            if (fields[i] !== null) {
                count++;
            }
        }
        fields[index] = (count % 2 === 0) ? cross : circle;
        render();
    }
}

function resetGame() {
    fields = [null, null, null, null, null, null, null, null, null];
    render();
}

render();