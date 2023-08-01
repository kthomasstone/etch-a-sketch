// store grid container in variable
let gridContainer = document.getElementsByClassName("grid-container")[0];

// create grid cell

function createGridCells() {
  for (let i = 1; i < 2500; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridContainer.appendChild(gridCell);
  }
}
createGridCells();

let gridCell = document.getElementsByClassName("grid-cell");

gridContainer.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("grid-cell")) {
    event.target.style.backgroundColor = "blue";
  }
});

gridContainer.addEventListener("mouseout", function (event) {
  if (event.target.classList.contains("grid-cell")) {
    event.target.style.backgroundColor = "";
  }
});

// if new grid button is clicked, prompt user for the desired number of grid cells per side
let newGridButton = document.getElementById("new-grid");
newGridButton.addEventListener("click", createNewGrid);

// CREATE NEW GRID
function createNewGrid() {
  let newGridCellTotal = prompt("number of grid cells on each side?");
  newGridCellTotal = Number(newGridCellTotal);
  // remove existing grid
  let oldGrid = document.getElementsByClassName("grid-cell");

  while (oldGrid.length > 0) {
    oldGrid[0].remove();
  }

  // add new grid to DOM
  for (let i = 0; i < newGridCellTotal; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridContainer.appendChild(gridCell);
  }
}

// set a limit of 100 squares

// create grid based on prompt answer

//add new grid to gridContainer
