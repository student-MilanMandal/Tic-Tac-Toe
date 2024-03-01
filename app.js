let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX,playerO

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O"; //playerO
      box.style.color = "blue";
      turnO = false;
    } else {
      box.innerText = "X"; //playerX
      box.style.color = "#b0413e";
      turnO = true;
    }
    box.disabled = true; // X AND O individual box was not double click
    checkWiner(); //function pass no1
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true; //function add no2
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

//winner display
const showWinner = (Winner) => {
  msg.innerText = `Congratulations,Winner is ${Winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes(); //function pass no2
};

const checkWiner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText; //function add no1
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    //winning condition
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
