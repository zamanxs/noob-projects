let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#newG");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () =>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if (turnO === true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const disableboxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, The Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableboxes();
}

const checkWinner = () => {
    for (let patter of winPatterns){
        let pos1val = boxes[patter[0]].innerText;
        let pos2val = boxes[patter[1]].innerText;
        let pos3val = boxes[patter[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "" ) {
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);

                showWinner(pos1val);
            }
        };
    };
}

newBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame); 