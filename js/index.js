const handOptions = {
    "rock": "./assets/Rock.png",
    "paper": "./assets/Paper.png",
    "scissors": "./assets/Scissors.png"
}
let SCORE = 0;
function pickUserHand(hand) {
    console.log(hand);
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    document.getElementById("userPickImage").src = handOptions[hand];
    let cpHand = pickComputerHand();
    referee(hand,cpHand);
}
function pickComputerHand() {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random()*3)];
    document.getElementById("computerPickImage").src = handOptions[cpHand];
    return cpHand;
}
const referee = (userHand,cpHand) => {
    if(userHand == "paper")
    {
        if(cpHand=="scissors")
            setDecision("YOU LOSE!");
        else if(cpHand=="rock")
        {
            setDecision("YOU WIN!");
            setScore(++SCORE);
        }
        else
            setDecision("IT'S A TIE!");   
    }
    else if(userHand == "scissors")
    {
        if(cpHand=="rock")
            setDecision("YOU LOSE!");
        else if(cpHand=="paper")
        {
            setDecision("YOU WIN!");
            setScore(++SCORE);
        }
        else
            setDecision("IT'S A TIE!");   
    }
    else
    {
        if(cpHand=="paper")
            setDecision("YOU LOSE!");
        else if(cpHand=="scissors")
        {
            setDecision("YOU WIN!");
            setScore(++SCORE);
        }
        else
            setDecision("IT'S A TIE!");   
    }
}
const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}
const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}
const setScore = (score) => {
    document.querySelector(".score h1").innerText = score;
}
