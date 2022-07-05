let gridLength = 16;
let color = '#343434';
let mode = 0;
let randomColor = '#000000';

function updateMode() {
    let button = document.getElementById('color');
    if (mode === 0) {
        console.log('test');
        mode = 1
    } else if (mode === 1) {
        mode = 0;
        button.style.transform = 1;
    } else {

    }
}

function clearGrid() {
    let reset = document.querySelectorAll('#column');
    reset.forEach(div => {
        div.style.backgroundColor = '#F9F6EE'
    })

}

function randomizeColor() {
    randomColor = '#000000';
}

function updateColor(clr) {
    color = clr;
}

function changeMode() {
    if (mode === 0) {

    }
    else if (mode === 1) {

    }
}

function generateGrid() {
    const grid = document.getElementById('grid');
    for (x = 1; x <= gridLength; x++) {
        const gridRow = document.createElement('div');
        gridRow.setAttribute('id', 'row');
        for (y = 1; y <= gridLength; y++) {
            const gridColumn = document.createElement('div');
            gridColumn.setAttribute('id', 'column');
            gridColumn.style.width = 'auto';
            gridColumn.style.height = 'auto';
            gridColumn.style.backgroundColor = '#FAF9F6';
            gridRow.appendChild(gridColumn);
            staticGrid(gridColumn);
            grid.appendChild(gridRow);
        }
    }
}

function staticGrid(column) {
    column.addEventListener('click', function () {
        if (mode === 0) {
            column.style.backgroundColor = color;
        } else if (mode === 1) {
            randomizeColor();
            column.style.backgroundColor = randomColor;
        }

    })
}


