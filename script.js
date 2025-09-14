let gridContainer = document.querySelector("#grid");

function generateGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        let temp = document.createElement("div");
        temp.setAttribute("style", "border: 2px solid blue;");
        gridContainer.appendChild(temp);
    }
}

//document.createElement("div").setAttribute("style", "border: 2px solid blue;")
generateGrid(16*16);