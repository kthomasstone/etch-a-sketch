// store grid container in variable
let gridContainer = document.getElementsByClassName("grid-container")[0];
let gridContainerWidth = gridContainer.offsetWidth;
let squareRoot = Math.sqrt(gridContainerWidth);
let cellArea = squareRoot * squareRoot;
let gridCell = document.getElementsByClassName("grid-cell");

// SETUP DEFAULT GRID

function setupGrid() {
  for (let i = 1; i < cellArea; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridContainer.appendChild(gridCell);
  }
}
setupGrid();

/* HOVER EFFECTS */
// hover effect mouseover
gridContainer.addEventListener("mouseover", function(event) {
  if (event.target.classList.contains("grid-cell")) {
    event.target.style.backgroundColor = "blue";
  }
});

// hover effect mouseout
gridContainer.addEventListener("mouseout", function(event) {
  if (event.target.classList.contains("grid-cell")) {
    event.target.style.backgroundColor = "";
  }
});

/* SETUP NEW GRID */
// if new grid button is clicked, prompt user for the desired number of grid cells per side
let newGridButton = document.getElementById("new-grid");
newGridButton.addEventListener("click", createNewGrid);

// create new grid
function createNewGrid() {
  // remove existing grid
  gridContainer.innerHTML = "";

  let gridCellsPerRow = prompt("number of grid cells in each row and column?");
  gridCellsPerRow = Number(gridCellsPerRow);

  let gridCellTotal = gridCellsPerRow * gridCellsPerRow;

  // add new grid to DOM
  for (let i = 0; i < gridCellTotal; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");

    console.log("new grid cell total: " + gridCellTotal);
    gridCell.style.width = gridContainerWidth / gridCellsPerRow + "px";
    gridCell.style.height = gridContainerWidth / gridCellsPerRow + "px";

    gridContainer.appendChild(gridCell);
  }
}
