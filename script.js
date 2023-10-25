const grid = document.querySelector(".grid");
const gridSizeInput = document.querySelector("#grid-size");
const generateButton = document.querySelector("#generate");

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
            if (i % 2 !== j % 2) {
                square.style.backgroundColor = "#eee";
            }
            square.addEventListener("mouseover", function() {
                let red = randomNumber(0, 255);
                let green = randomNumber(0, 255);
                let blue = randomNumber(0, 255);
                square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
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