let color = '#343434';
let mode = 'static';
let eraser=false;
let mouseStatus = false;
let gridSize=[3,9,16,32,64];


//Selects Color mode
function updateMode() {
    let button = document.querySelector('#color');
        if (mode === 'static') {
            mode = 'random'
            button.style.backgroundColor='#28282B'
            button.style.color='#F9F6EE'          
    
        } else if (mode === 'random') {
            mode = 'static';
            button.style.backgroundColor=''
            button.style.color='#28282B'  
        }     
}

//Enable/Disable Eraser
function eraseGrid(){
    let button = document.querySelector('#eraser');
    if (eraser===false){
        eraser = true
        button.style.backgroundColor='#28282B'
        button.style.color='#F9F6EE'
        color='#FAF9F6'
    }
    else{
        eraser=false
        button.style.backgroundColor=''
        button.style.color='#28282B'
    }
}

//clear Current Grid
function clearGrid() {
    let reset = document.querySelectorAll('#column');
    reset.forEach(div => {
        div.style.backgroundColor = '#FAF9F6'
    })

}

//randomize Color when Randomize option is selected
function randomizeColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    color=randomColor
}

function updateColor(clr) {
    color = clr;
}

//update Grid Size
function updateGrid(size){
    let gridChange=document.getElementById('gridbar') 
    gridChange.textContent=`${gridSize[size]} X ${gridSize[size]}`
    clearGrid()
    generateGrid(gridSize[size])  
}

//populate Grid with dynamic Rows & Columns
function generateGrid(gridLength) {
    if (gridLength===undefined){
        gridLength=16
    }    
    const grid = document.getElementById('grid');
    const del=document.querySelectorAll('div #row')
    del.forEach((div)=>div.remove())
    for (x = 1; x <=gridLength; x++) {
        console.log(gridLength) 
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



//Update focused DIV's Background
function staticGrid(column) {
    let picker=document.getElementById('picker').value
    column.addEventListener('mousedown', () => {
        if(mode==='random' && eraser!==true){
            randomizeColor()
            column.style.backgroundColor=color
        }else if(mode==='static' && eraser!==true){
            let picker=document.getElementById('picker').value
            column.style.backgroundColor=picker
        }else if(mode==='static' && eraser===true){
            column.style.backgroundColor=color
        }
    })
        column.addEventListener('mouseenter', () => {    
            if (mouseStatus===true){
                if(mode==='random' && eraser!==true){
                    randomizeColor()
                    column.style.backgroundColor=color
                }else if(mode==='static' && eraser!==true){
                    let picker=document.getElementById('picker').value
                    column.style.backgroundColor=picker
                }else if(mode==='static' && eraser===true){
                    column.style.backgroundColor=color
                }else{
                    if(confirm('You Cant Enable Eraser & Randomizer at the same time!')===true){
                        updateMode()
                    }
                }
            
        }
        })
    }      
            
function mouseDown(){ 
    mouseStatus=true
}

function mouseUp(){   
    mouseStatus=false
}







