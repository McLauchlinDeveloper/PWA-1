/**
 * Duel Fight Game - FINISHED
 * Date: 6/13/14
Corey McLauchlin
 Assignment 2 - Duel

*/

// this function executes at the bottom
(function(){

    console.log("FIGHT!!!");

    //players' name, damage, and health being put into arrays
    var playerOne = ["Kabal", 20, 100];
    var playerTwo = ["Kratos", 20, 100];



    //variable for rounds
    var round=0;
//function which displays player health, round information, computes damage, and displays winner
    function fight(){
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //this block of code is used to compute damage
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //inflict damage
            //this assigns damage to the players health amount
            playerOne[2]-=f1;
            playerTwo[2]-=f2;
//this line displays health totals reactively
            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);

            //check for victor
//this variable calls a function which uses logic to decide a winner
            var result = winnerCheck();
            console.log(result);
            //uses logic to count rounds up until a winner is decided and display the result.
            if (result==="no winner")
            {
                //counts round up from 0 consecutively
                round++;
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

            } else{
                alert(result);
                //breaking loop to allow other things to happen
                break;
            }

          }
    }
// function deciding and displaying a winner based on amount of health
    function winnerCheck(){
        var result="no winner";
        if (playerOne[2]<1 && playerTwo[2]<1)
        {
            result = "You Both Die";
        } else if(playerOne[2]<1){
            result =playerTwo[0]+" WINS!!!"
        } else if (playerTwo[2]<1)
        {
            result = playerOne[0]+" WINS!!!"
        }
       return result;
    }

    // runs the program
    fight();

})();