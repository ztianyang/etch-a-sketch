const grid = document.querySelector(".grid");
const gridSizeInput = document.querySelector("#grid-size");
const generateButton = document.querySelector("#generate");

function generateGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (let i = 0; i < size; i++)
    {
        let row = document.createElement("div");
        for (let j = 0; j < size; j++)
        {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", function() {
                square.style.backgroundColor = "#555";
            });
            row.appendChild(square);
        }
        row.classList.add("row");
        grid.appendChild(row);
    }
}

generateButton.addEventListener("click", function() {
    let gridSize = Number.parseInt(gridSizeInput.value);
    if (Number.isNaN(gridSize)) {
        return;
    }
    if (gridSize < 1) {
        gridSize = 1;
    }
    if (gridSize > 64) {
        gridSize = 64;
    }
    generateGrid(gridSize);
});

generateGrid(16);