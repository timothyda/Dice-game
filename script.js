
let img= ["Dice1.png","Dice2.png","Dice3.png",
"Dice4.png","Dice5.png","Dice6.png"];

let dice= document.querySelectorAll("img");

function rollTheDice() {
    dice.forEach(function(die){
        die.classList.add("shake");
    });


    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        
        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");
        
        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");
        
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
        
    }, 1200 
    );
}