const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++)
{
    let row = document.createElement("div");
    for (let j = 0; j < 16; j++)
    {
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
    row.classList.add("row");
    grid.appendChild(row);
}