const gridDiv = document.getElementById('grid');
const dimensionBtn = document.getElementById('dimensionBtn');
var currentDimension;
const gridDimension = 30 //dimension in vertical width VW set for the grid itself


dimensionBtn.addEventListener('click', () => dimensionClicked());
if(currentDimension == null) setGrid(16);

function game(){
    const pixels = document.querySelectorAll('.pixels');

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', function () {
            pixel.classList.add('hover');
        });
    });
}


function setGrid(dimension){
    gridDiv.innerHTML = '';
    currentDimension = dimension;

    for(let i = 0; i < dimension; i++){
        let column = gridDiv.appendChild(document.createElement('div'));
        column.classList.add('columns');
        column.setAttribute('style', 'Display: flex; width: ' + gridDimension + 'vw; height: ' + gridDimension / dimension + 'vw;');
        for(let i = 0; i< dimension; i++){
            let pixel = column.appendChild(document.createElement('div'));
            pixel.classList.add('pixels')
            pixel.setAttribute('style', 'height: ' + gridDimension / dimension + 'vw; width: ' + gridDimension / dimension + 'vw;');
        }
    }
    game();
}

function dimensionClicked(){
    var tempDimensionGrid = parseInt(prompt('Dimension grid needed (MAX 100):'));

    if(isNaN(tempDimensionGrid) ||
     tempDimensionGrid < 2 ||
     tempDimensionGrid > 100){
        alert('A number between 2 and 100 must be entered!');
     } else{
        setGrid(tempDimensionGrid);
     }
}