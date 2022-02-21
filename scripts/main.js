let loadedVar = 1;
let scriptLoaded = "The script is loaded!";
let scriptNotLoaded =
  "The script is loaded but the loadedVar isn't stored succesfully!";
if (loadedVar === 1) {
  console.log(scriptLoaded);
} else {
  console.log(scriptNotLoaded);
}

let gridContainer = document.body.querySelector(".sketch-container");
let squareRange = document.body.querySelector(".range-slider");
let etchSquares = squareRange.value;
const clearButton = document.body.querySelector(".clear-button");

// squareRange.addEventListener("input", function (e) {
//   console.log("detecting input change");
//   //window.location.reload()
//   etchSquares = squareRange.value;
//   updateSquareStyles();
// });

squareRange.addEventListener("change", function (e) {
  console.log("detecting input change");
  //window.location.reload()
  etchSquares = squareRange.value;
  updateSquareStyles();
});

clearButton.addEventListener("click", function (e) {
  window.location.reload();
})

const updateSquareStyles = () => {
  console.log("creating new grid with size", etchSquares);
  gridContainer.innerHTML = "";

  for (let i = 1; i <= etchSquares * etchSquares; i++) {
    var squares = document.createElement("div");
    squares.className = "etch-square";
    squares.id = "square-" + i;
    squares.style.width = 600 / etchSquares + "px";
    squares.style.height = 600 / etchSquares + "px";
    gridContainer.style.gridTemplateColumns = `repeat(${etchSquares}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${etchSquares}, 1fr)`;
    gridContainer.appendChild(squares);
  }

  const hoverEffect = document.body.querySelectorAll(".etch-square");
  console.log(hoverEffect);

  for (var i = 0; i < hoverEffect.length; i++) {
    hoverEffect[i].addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = colorPicker.value;
    });
  }
};


// const clickEffect = document.body.querySelectorAll(".etch-square");
// console.log(clickEffect);

// for (var i = 0; i < clickEffect.length; i++) {
//   hoverEffect[i].addEventListener("click", function (e) {
//     e.target.style.backgroundColor = colorPicker.value;
//   });
// }
// };

updateSquareStyles();

let colorPicker = document.body.querySelector(".color-picker");

colorPicker.addEventListener("input", function (e) {
  let newColor = colorPicker.value;
  console.log("color has been changed!", newColor);
});
