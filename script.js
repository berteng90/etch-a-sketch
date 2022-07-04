let gridSize = 16;


function generateGrid() {
    const grid = document.getElementById('grid');
    for (x = 1; x < gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.setAttribute('id', 'row');
        gridRow.style.backgroundColor = 'white';
        for (y = 1; y <= 16; y++) {
            const gridColumn = document.createElement('div');
            gridColumn.setAttribute('id', 'column');
            gridColumn.style.width = '50px';
            gridColumn.style.height = '50px';
            gridColumn.style.backgroundColor = '#36454F';
            gridRow.appendChild(gridColumn);
        }
        grid.appendChild(gridRow);
    }
}

function updateGrid() {

}
