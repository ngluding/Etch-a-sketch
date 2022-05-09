let currentState = false;


function getBoard(boardSize=20*20, className = "grid-20") {
    let board = document.querySelector(".board");
    let emptyDiv = board.querySelectorAll("div");
    emptyDiv.forEach((div) => div.remove());
    // board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    // board.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

    for (i = 0; i < boardSize; i++) {
        let square = document.createElement("div");
        board.classList.remove("grid-20", "grid-25", "grid-30", "grid-35");
        board.classList.add(className);
        // square.addEventListener("click", toggleColouring);
        // square.addEventListener("mouseover", () => {
        //     square.style.cssText = "background-color: black";
        // })
        square.style.cssText = "background-color: blue";
        // square.style.cssText = "border: 1.5px solid black; height: 25px; width: 25px"
        board.append(square);
        // div.addEventListener("click")
    }
    board.addEventListener("click", toggleColouring);
}


function toggleColouring() {
    const squares = document.querySelectorAll("div");

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
    console.log(currentState);
}


function colouring (e) {
    e.target.style.backgroundColor = "black";
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

getBoard(20*20, "grid-20");
changeSize();
