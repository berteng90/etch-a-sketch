let gridLength = 16;
let color='#343434';


function updateColor(clr){
    let color=clr;
    return color;
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
        }
        grid.appendChild(gridRow);
    }
}

function updateGrid() {
    const div=document.querySelectorAll('div');
    div.forEach(div=>{
    div.addEventListener('click', function (){
        console.log('HEHE'); 
    })
    })
}

updateGrid();
