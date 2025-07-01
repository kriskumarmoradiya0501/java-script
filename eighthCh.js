let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let msg = document.querySelector(".msg");

let count = 0;

let turnO = true;

/**
 * 012
 * 345
 * 678
 */

let arr = [[0,1,2], 
[3,4,5], 
[6,7,8], 
[0,3,6], 
[1,4,7], 
[2,5,8], 
[0,4,8], 
[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box clicked");
        if(turnO){
            box.innerText = "O";
            
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    })

});

let winner = false

const checkWinner = ()=>{
    for(let pattern of arr){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("winner",pos1);
                msg.innerText = "Winner is "+pos1;
                winner = true;
            }
        }
        if(count == 9 && !winner){
                msg.innerText = "Match Draw";
        }
    }
};

const resetGame = ()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
    msg.innerText = "";
    turnO = true;
    count = 0;
};
 
resetBtn.addEventListener("click", resetGame);

