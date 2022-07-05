let gridLength = 16;
let color = '#343434';
let mode = 0;
let randomColor = Math.floor(Math.random() * 16777215).toString(16);
let mouseStatus = false;

function updateMode() {
    let button = document.querySelector('#color');
    if (mode === 0) {
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
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
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
        }
        grid.appendChild(gridRow);
    }
}

function staticGrid(column) {
    if (mouseStatus === true) {
        column.addEventListener('mousemove', () => {
            column.style.backgroundColor = '#343434';
        })
    }

}

function mouseReset() {
    mouseStatus = false;
}







