let currentState = false;
let colour = "black";


function getBoard(boardSize=20*20, className = "grid-20") {
    let board = document.querySelector(".board");
    let emptyDiv = board.querySelectorAll("div");

    emptyDiv.forEach((div) => div.remove());

    for (i = 0; i < boardSize; i++) {
        let square = document.createElement("div");
        board.classList.remove("grid-20", "grid-25", "grid-30", "grid-35");
        board.classList.add(className);
        square.style.cssText = "background-color: rgba(0,0,0,0)";
        board.append(square);
    }

    board.addEventListener("click", toggleColouring);
}


function toggleColouring() {
    const squares = document.querySelectorAll(".board div");

    if (!currentState) {
        squares.forEach((square) => {
            square.addEventListener("mouseenter", colouring)
        });
        currentState = true;
    } else {
        squares.forEach((square) => {
            square.removeEventListener("mouseenter", colouring)
        });
        currentState = false;
    }
}


function changeColour(selection) {
    colour = selection
}

function colouring (e) {
    if (colour === "random") {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (colour === "black") { 
        e.target.style.backgroundColor = "black";
    } else if (colour === "shade") {
        shade(e);
    } else if (colour === "custom") {
        custom(e);
    }
}

function custom(e) {
    let customColour = document.querySelector("#custom").value;
    e.target.style.backgroundColor = customColour;
}

function shade(e) {
    let background = e.target.style.backgroundColor;
    let opacity = background.split(" ")[3];
    let opacityNumber = parseFloat(opacity);

    console.log(background)
    console.log(opacity);
    console.log(opacityNumber)

    if (opacityNumber === 0) {
        e.target.style.backgroundColor = "rgba(0,0,0,0.1)";
    } else if (opacityNumber >= 0.1 && opacityNumber <= 0.9) {
        e.target.style.backgroundColor = `rgba(0,0,0,${opacityNumber + 0.2})`
    }
}


function changeSize() {
    const pixel = document.querySelectorAll("button");
    pixel.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.classList.contains("grid-20")) {
            getBoard(20*20, "grid-20"); 
        } else if (button.classList.contains("grid-25")) {
            getBoard(25*25, "grid-25");
        } else if (button.classList.contains("grid-30")) {
            getBoard(30*30, "grid-30");
        } else if (button.classList.contains("grid-35")) {
            getBoard(35*35, "grid-35");
        } 
    }) 
})
}

function resetBoard() {
    let board = document.querySelector(".board");
    let emptyDiv = board.querySelectorAll(".board div");
    emptyDiv.forEach((div) => div.style.backgroundColor = "rgba(0,0,0,0)");
}

getBoard(20*20, "grid-20");
changeSize();