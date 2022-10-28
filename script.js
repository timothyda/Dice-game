// Calls images for side of dice
let img= ["Dice1.png","Dice2.png","Dice3.png",
"Dice4.png","Dice5.png","Dice6.png"];

let dice= document.querySelectorAll("img");

// Function starts to shake dice
function rollTheDice() {
    dice.forEach(function(die){
        die.classList.add("shake");
    });

    /* setTimeout for shake, Picks random number between 1-6, and 
    calls that number associated with the dice#.png */
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
        
        // Displays winner at h2, above the dice
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
        
    }, 1200 //time for shake setTimeout
    );
}