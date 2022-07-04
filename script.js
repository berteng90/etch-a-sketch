let gridLength = 16;


function generateGrid() {
    const grid = document.getElementById('grid');
    for (x = 1; x < gridLength; x++) {
        const gridRow = document.createElement('div');
        gridRow.setAttribute('id', 'row');
        for (y = 1; y <= 16; y++) {
            const gridColumn = document.createElement('div');
            gridColumn.setAttribute('id', 'column');
            gridColumn.style.width = '50px';
            gridColumn.style.height = '100%';
            gridColumn.style.backgroundColor = '#36454F';
            gridRow.appendChild(gridColumn);
        }
        grid.appendChild(gridRow);
    }
}

function updateGrid() {

}
