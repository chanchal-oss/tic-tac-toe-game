let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#newbtn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
 //playerX and playerY
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turnO=true;
    boxes.innerText="";
    enableboxes();
    msgcont.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
    console.log("clicked!");
    if(turnO){  //turnof player O
      box.innerText="O";
      box.style.color="blue";
      turnO=false;
}
else{          //player X turn
    box.innerText="X";
    turnO=true;
}
box.disabled=true;

checkwin();  //function call
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
 for(let box of boxes){
    box.disabled=false;
    //box.innerText="";
 }
}
const showwin=(winner)=>{
    console.log(msg.innerText=`congratulations!! bittu, Winner is ${winner}`);
    
    
   msgcont.classList.remove("hide");
   disableboxes();

};


const checkwin=()=>{
    for(let pattern of winpatterns){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3 ){
                console.log("winner!",p1);
                showwin(p1);
                
            }
        }

    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);



