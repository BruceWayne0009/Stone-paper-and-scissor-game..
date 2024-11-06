let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options=["Rock","Paper","Scissor"]
  const randIdx=Math.floor(Math.random() * 3);
  return options[randIdx];
}

const drawgame =() => {
    msg.innerText=("Game was Drawn!!.....Play Again...");
    msg.style.backgroundColor = "#081b31"
}

const showWinner =(userWin,userchoice,compchoice) =>{
    if(userWin) {
       userScore++;
       userScorepara.innerText= userScore;
        msg.innerText=`You Win!! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++
        compScorepara.innerText= compScore;
        msg.innerText=`You Lose!! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) =>{
   const compchoice = gencompchoice();
   if(userchoice=== compchoice) {
           drawgame();
   }  else{
    userWin = true;
    if(userchoice==="Rock"){
        userWin= compchoice==="Paper" ? false : true;
    } else if(userchoice==="Paper"){
        userWin= compchoice==="Scissor" ? false : true;
    }else{
        userWin= compchoice==="Rock" ? false : true;
    }
    showWinner(userWin , userchoice , compchoice);
   }
};
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id")
        playGame(userchoice);
    })  
});