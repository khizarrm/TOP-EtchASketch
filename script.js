const grid = document.querySelector(".grid"); 

for (let i = 0; i < 16; i++){
    let rowDiv = document.createElement("div"); 
    rowDiv.className = "row"; 
    for (let j = 0; j < 16; j++){
        let square = document.createElement("div");
        square.className = "square";
        rowDiv.appendChild(square);
    }
    grid.appendChild(rowDiv);
}

const squares = document.querySelectorAll(".square");

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

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        if (isDown){
            square.style.backgroundColor = "black";
        }
    })
})

