let Rows = 16;
let Columns = 16;
const grid = document.getElementById('grid');

function generateGrid() {
    for (x = 1; x <= Rows; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('row');
        for (y = 1; y <= Columns; y++) {
            const gridColumn = document.createElement('div');
            gridColumn.classList.add('column');
            gridColumn.style.width = '25px';
            gridColumn.style.widows = '25px';
            gridColumn.style.backgroundColor = '#36454F';
            gridRow.appendChild(gridColumn);
        }
        grid.appendChild(gridRow);
    }
}
