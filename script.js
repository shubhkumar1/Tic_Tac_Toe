let boxes = document.querySelectorAll(".button");
let res = document.getElementById("header")
// let resetBtn = document.getElementById("resetBtn");
let resetBtns = document.querySelectorAll(".resetBtn");


let arrys = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turnO = true;



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            box.style.color = "red"
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            box.style.color = "green"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const showMsg =(player)=>{
    res.innerText = player + " is winner";
    disableBtns();
}

const disableBtns=()=>{
    for(let btn of boxes){
        btn.disabled = true;
    }
}

const enableBtns=()=>{
    for(let btn of boxes){
        btn.disabled = false;
        btn.innerText ="";
    }
}

const hideMsg=()=>{
    res.classList.add("hide");
}

const checkWinner = ()=>{
    for(let arr of arrys){

        let box1 = boxes[arr[0]].innerText;
        let box2 = boxes[arr[1]].innerText;
        let box3 = boxes[arr[2]].innerText;

        
        if(box1 != "" && box2 != "" && box3 != ""){
            if(box1 === box2 && box2 === box3){
                console.log("Win");
                res.classList.remove("hide");
                showMsg(box1);
            }
        }
    }
}

resetBtns.forEach((resetBtn)=>{
    resetBtn.addEventListener("click", ()=>{
        turnO = true;
        hideMsg();
        enableBtns();
    })
})