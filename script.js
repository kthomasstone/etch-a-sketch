// store grid container in variable
let gridContainer = document.getElementsByClassName("grid-container")[0];
let gridContainerWidth = gridContainer.offsetWidth;
console.log(gridContainerWidth);
let cellWidth = Math.sqrt(gridContainerWidth);
let cellArea = cellWidth * cellWidth;

let gridCell = document.getElementsByClassName("grid-cell");

// SETUP DEFAULT GRID

function setupGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 1; i < cellArea; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridContainer.appendChild(gridCell);
  }
}
setupGrid(16);

// UNICORN PUKE EFFECT
function getRandomColor() {
  // Generate a random color in hexadecimal format
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

/* HOVER EFFECTS */
// mouseover
gridContainer.addEventListener("mouseover", function(event) {
  if (event.target.classList.contains("grid-cell")) {
    event.target.classList.toggle("grid-cell-active", true);
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

  let gridCellsPerRow = Number(
    prompt("number of grid cells in each row and column?")
  );
  setupGrid(gridCellsPerRow);
}
