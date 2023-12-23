const gridDiv = document.getElementById('grid');
const dimensionBtn = document.getElementById('dimensionBtn');
var currentDimension;
dimensionBtn.addEventListener('click', () => dimensionClicked());

if(currentDimension == null) setGrid(16);

function setGrid(dimension){
    gridDiv.innerHTML = '';
    currentDimension = dimension;

    for(let i = 0; i < dimension; i++){
        let column = gridDiv.appendChild(document.createElement('div'));
        column.classList.add('columns');
        column.setAttribute('style', 'Display: flex; justify-content: center; align-items: center;');
        for(let i = 0; i< dimension; i++){
            let pixel = column.appendChild(document.createElement('div'));
            pixel.classList.add('pixels')
            pixel.setAttribute('style', 'border: solid 0.1px; height: 1px; width: 1px;');
        }
    }
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