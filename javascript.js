const gridDiv = document.getElementById('grid');
const dimensionBtn = document.getElementById('dimensionBtn');

var dimensionGrid = 16;

dimensionBtn.addEventListener('click', () => dimensionClicked());

function dimensionClicked(){
    var tempDimensionGrid = parseInt(prompt('Dimension grid needed (MAX 100):'));

    if(isNaN(tempDimensionGrid) ||
     tempDimensionGrid < 2 ||
     tempDimensionGrid > 100){
        alert('A number between 2 and 100 must be entered!');
     } else{
        dimensionGrid = tempDimensionGrid;
     }
}