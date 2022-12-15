//sets dice side image as veriable 
let img= ["Dice1.png","Dice2.png","Dice3.png",
"Dice4.png","Dice5.png","Dice6.png"];

//associates dice with img 
let dice= document.querySelectorAll("img");

//shake dice
function rollTheDice() {
    dice.forEach(function(die){
        die.classList.add("shake");
});

//associates number with dice side and names winner
setTimeout(function(){
    dice.forEach(function(die){
    die.classList.remove("shake");
    });

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
            
    document.querySelector(".img1").setAttribute("src",
        "Dice" + randomNumber1 + ".png");
            
    document.querySelector(".img2").setAttribute("src",
        "Dice" + randomNumber2 + ".png");
            
    if (randomNumber1 === randomNumber2) {
        document.querySelector("h2").innerHTML = "Draw!";
    }
            
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h2").innerHTML
                                    = (player2 + " WINS!");
    }
            
    else {
        document.querySelector("h2").innerHTML
                                    = (player1 + " WINS!");
    }
            
}, 1200 //time for shake timeout
);
}


  //set-Player names
var player1 = "Player 1";
var player2 = "Player 2";

//change names
function editNames(){
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
} 

