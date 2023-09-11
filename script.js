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

/* HOVER EFFECTS */
// mouseover
gridContainer.addEventListener("mouseover", function(event) {
  if (unicornMode == true) {
    if (event.target.classList.contains("grid-cell")) {
      event.target.style.backgroundColor = getRandomColor();
    } else if (event.target.classList.contains("grid-cell")) {
      event.target.classList.toggle("grid-cell-active", true);
    }
  }

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

// UNICORN MODE
let unicornMode = false;
const unicornModeButton = document.getElementById("unicorn");

// listen for unicorn puke button focus
unicornModeButton.addEventListener("focus", () => {
  unicornMode = true;
  console.log("unicorn is focused");
});
// listen for unicorn puke button blur
unicornModeButton.addEventListener("blur", () => {
  unicornMode = false;
  console.log("unicorn has lost its focus");
});

// create function to generate random color
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// update variable with random color

// change background color grid-cell-active class to the random hex code
