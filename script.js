

    //sets dice side images as veriable
    let img= ["Dice1.png","Dice2.png","Dice3.png",
    "Dice4.png","Dice5.png","Dice6.png"];

    //associates dice with img 
    let dice= document.querySelectorAll("img");

    //shake dice
    function rollTheDice() {
        dice.forEach(function(die){
            die.classList.add("shake");
        });


        /* timeout for shake, picks random number between 1-6, 
        associates that with dice side, and displays winner */
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
