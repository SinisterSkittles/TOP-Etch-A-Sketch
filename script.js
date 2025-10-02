const gridContainer = document.querySelector("#grid");
const button = document.querySelector("button");
let size = 0;

function generateGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        let temp = document.createElement("div");
        temp.setAttribute("style", "border: 2px solid blue;");
        temp.setAttribute("class", "hoverDiv");
        gridContainer.appendChild(temp);
    }
}

generateGrid(16*16);

const hoverDivs = document.querySelectorAll(".hoverDiv");

hoverDivs.forEach((div) => {
    div.addEventListener('mouseover', (event) => {
       event.target.style.backgroundColor = "orange";
    });
});


