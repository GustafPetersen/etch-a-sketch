let loadedVar = 1;
scriptLoaded = "The script is loaded!"
scriptNotLoaded = "The script is loaded but the loadedVar isn't stored succesfully!"
if (loadedVar === 1){
    console.log(scriptLoaded)
} else {
    console.log(scriptNotLoaded)
}

let gridContainer = document.body.querySelector(".sketch-container"); 

let etchSquares = 256;
for (let i = 1; i <= etchSquares; i++){
    var squares = document.createElement('div');
    squares.className = "etch-square";
    squares.id = "square-" + i;
    gridContainer.appendChild(squares);
    console.log(i + " div(s) has been created");
}

let numberRowColumn = Math.sqrt(etchSquares);
const sizeRowColumn = Math.sqrt(etchSquares) + "%";

const createGrid = () => {
     gridContainer.style(gridTemplateColumns = `repeat(${numberRowColumn}, ${sizeRowColumn})`)
     gridContainer.style(gridTemplateRows = `repeat(${numberRowColumn}, ${sizeRowColumn})`)
}

createGrid()