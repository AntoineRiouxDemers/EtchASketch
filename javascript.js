const gridDiv = document.getElementById('grid');
const dimensionBtn = document.getElementById('dimensionBtn');
const clearBtn = document.getElementById('clearBtn');
const rgbBtn = document.getElementById('rgbBtn');
const progressiveBtn = document.getElementById('progressBtn');
const blackBtn = document.getElementById('blackBtn');
const gridDimension = 30 //dimension in vertical width VW set for the grid itself
var currentDimension;
var currentColor = 'black';

dimensionBtn.addEventListener('click', () => dimensionClicked());
if(currentDimension == null) setGrid(16);


//main game function
function game(){

    let pixels = document.querySelectorAll('.pixels');

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', function () {
            setColor(pixel);
            console.log(pixel.classList);

        });
    });

    clearBtn.addEventListener('click', () => clearGrid());
    rgbBtn.addEventListener('click', () => currentColor = 'rgb');
    blackBtn.addEventListener('click', () => currentColor = 'black');
}

//Set Color of pixel when mouse hover it
function setColor(pixel, isAlreadyColored){
    switch(currentColor){
        case 'rgb':
            console.log('rgb(' + getRandomColor() + ')')
            pixel.style.backgroundColor = 'rgb(' + getRandomColor() + ')';
            break;
        case 'progressive':
            break;
        default:
            pixel.style.backgroundColor = currentColor;
    }
}

//Return a random rgb array
function getRandomColor(){
    return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
}

//Clearing the Grid
function clearGrid(){
    let pixels = document.querySelectorAll('.pixels');

    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '';
    }); 
}

//Setting up the Grid with dimension by default or asked
function setGrid(dimension){
    gridDiv.innerHTML = '';
    currentDimension = dimension;

    for(let i = 0; i < dimension; i++){
        let column = gridDiv.appendChild(document.createElement('div'));
        column.classList.add('columns');
        column.setAttribute('style', 'Display: flex; width: ' + gridDimension + 'vw; height: ' + gridDimension / dimension + 'vw;');
        for(let i = 0; i< dimension; i++){
            let pixel = column.appendChild(document.createElement('div'));
            pixel.classList.add('pixels');
            pixel.setAttribute('style', 'height: ' + gridDimension / dimension + 'vw; width: ' + gridDimension / dimension + 'vw;');
        }
    }
    game();
}

//Prompt when dimension button is clicked to setup the Grid
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