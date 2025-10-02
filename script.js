const gridContainer = document.querySelector("#grid");


function generateGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        let temp = document.createElement("div");
        temp.setAttribute("style", "border: 2px solid blue;");
        temp.setAttribute("class", "hoverDiv");
        gridContainer.appendChild(temp);
    }
}

const hoverDivs = document.querySelectorAll(".hoverDiv");

//document.createElement("div").setAttribute("style", "border: 2px solid blue;")
generateGrid(16*16);

