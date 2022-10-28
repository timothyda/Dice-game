  
    var player1 = "Player 1";
    var player2 = "Player 2";
  

    function editNames(){
        player1 = prompt("Change Player1 name");
        player2 = prompt("Change player2 name");

        document.querySelector("p.Player1").innerHTML = player1;
        document.querySelector("p.Player2").innerHTML = player2;
    }  
    