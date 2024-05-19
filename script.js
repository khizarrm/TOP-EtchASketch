
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

const grid = document.querySelector(".grid"); 
function createGrid(size){
    for (let i = 0; i < size; i++){
        let rowDiv = document.createElement("div"); 
        rowDiv.className = "row"; 
        for (let j = 0; j < size; j++){
            let square = document.createElement("div");
            square.className = "square";
            rowDiv.appendChild(square);
            square.addEventListener("mousemove", () => {
                if (isDown == true){
                    square.style.backgroundColor = "black";
                }
            })
        }
        grid.appendChild(rowDiv);
    }
}


const button = document.querySelector("button");
button.addEventListener("click", () => {
    let newSize = prompt("What size do you want the cell to be? ");
    while (newSize > 100 || newSize < 0){
        newSize = prompt("Invalid Number, What size do you want the cell to be? ");
    }
    //remove previous grid 
    grid.innerHTML = "";
    createGrid(newSize);
})

//Initial Grid 
createGrid(50);
