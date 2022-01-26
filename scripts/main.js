let loadedVar = 1;
scriptLoaded = "The script is loaded!"
scriptNotLoaded = "The script is loaded but the loadedVar isn't stored succesfully!"
if (loadedVar === 1){
    console.log(scriptLoaded)
} else {
    console.log(scriptNotLoaded)
}

let gridContainer = document.body.querySelector(".sketch-container"); 

let etchSquares = 20;
for (let i = 1; i <= (etchSquares*etchSquares); i++){
    var squares = document.createElement('div');
    squares.className = "etch-square";
    squares.id = "square-" + i;
    squares.style.width = etchSquares + "px";
    squares.style.height = etchSquares + "px";
    gridContainer.style.gridTemplateColumns = `repeat(${etchSquares}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${etchSquares}, 1fr)`;
    gridContainer.appendChild(squares);
    }

const color
const colorMod = edocument.body.querySelector(".color-mode");
const blackMode = document.body.querySelector(".black-mode");
const randomMode = document.body.querySelector(".random-mode");
const eraserButton = document.body.querySelector(".eraser-button");
const clearButton = document.body.querySelector(".clear-button");
const rangeSlider = document.body.querySelector(".range-slider");

const DEFAULT_COLOR = "#363636";
const CURRENT_MODE = "color";

const currentColor = DEFAULT_COLOR;
const currentMode =  CURRENT_MODE;

function setColor(newColor){
    currentColor = newColor;
}
function setMode(newMode){
    currentMode = newMode;
}

colorButton.onchange = (e) => setColor(e.target.value)