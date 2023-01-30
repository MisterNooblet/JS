const genBtn = document.querySelector('button')
const multiplication = document.querySelector('input')
const table = document.querySelector('#multiTable')

genBtn.addEventListener('click', () => {
    genTable()
})

function genTable() {
    let multi = Number(multiplication.value) + 1;
    if (multi > 0) {
        let output = '';
        for (let i = 1; i <= 10; i++) {
            output += '<tr>'
            for (let x = 1; x < multi; x++) {
                output += `<td>${i * x}</td>`;
            }
            output += '</tr>'
        }
        table.innerHTML = output;
    }
}