
//Finding out if the mouse if pressed or not
let isDown = false; 
const body = document.body;
body.addEventListener("mousedown", () => {
    isDown = true; 
    console.log("mouse is down")
})

body.addEventListener("mouseup", () => {
    isDown = false; 
    console.log("mouse is up")
})

let squareColor = "black";
const grid = document.querySelector(".grid"); 
function createGrid(size){
    for (let i = 0; i < size; i++){
        let rowDiv = document.createElement("div"); 
        rowDiv.className = "row"; 
        for (let j = 0; j < size; j++){
            let square = document.createElement("div");
            square.className = "square";
            rowDiv.appendChild(square);
            let colored = false; 
            square.addEventListener("mousemove", () => {
                if (isDown == true){
                    square.style.backgroundColor = squareColor;
                    colored = true; 
                }
            })
        }
        grid.appendChild(rowDiv);
    }
}

let gridSize = 12;
const setSizeButton = document.querySelector(".set-size");
setSizeButton.addEventListener("click", () => {
    gridSize = prompt("What size do you want the cell to be? (Default is 12) ");
    while (gridSize > 100 || gridSize < 0){
        gridSize = prompt("Invalid Number, What size do you want the cell to be? ");
    }
    //remove previous grid 
    grid.innerHTML = "";
    createGrid(gridSize);
})


const customButton = document.querySelector(".custom");
customButton.addEventListener("click", () => {
    let color = prompt("What color would you like to choose? ")
    squareColor = color.toLowerCase();
})

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    grid.innerHTML = "";
    createGrid(gridSize);
})
//Initial Grid 
createGrid(gridSize);


