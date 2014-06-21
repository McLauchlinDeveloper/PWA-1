/**
 * Duel Fight Game 3
 * Date: 6/20/14
Corey McLauchlin
 Assignment week 3 - Duel

*/

// this function executes at the bottom
(function(){

    console.log("FIGHT!!!");

    var fighters1_txt = document.getElementById("kabal");
    var fighters2_txt = document.getElementById("kratos");
    var round_txt = document.getElementById("round");
    var button = document.getElementById("fight_btn");

    button.addEventListener("click", fight, false);

var fighters =[{

    name: "Kabal",
    damage: 20,
    health: 100

    },
        {
            name: "Kratos",
            damage: 20,
            health: 100

        }];

    var round = 1;

   round_txt.innerHTML = "Click fight button";
   fighters1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
   fighters2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;


//function which displays player health, round information, computes damage, and displays winner
    function fight(){
        fighters1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighters2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //this block of code is used to compute damage
            var f1 = Math.floor(Math.random()*fighters[0].damage + fighters[0].damage *.5;
            var f2 = Math.floor(Math.random()*fighters[1].damage + fighters[1].damage *.5;

            //inflict damage
            //this assigns damage to the players health amount
            fighters[0]-=f1;
            fighters[1]-=f2;
//this line displays health totals reactively
            console.log(fighters[0].health, fighters[1].health);

            //check for victor
//this variable calls a function which uses logic to decide a winner
            var result = winnerCheck();
            console.log(result);
            round_txt.innerHTML = "ROUND #" + round + " Results:";
            round++;
            //uses logic to count rounds up until a winner is decided and display the result.
            if (result==="no winner")
            {
                //counts round up from 0 consecutively
                fighters1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
                fighters2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

            } else{
                fighters1_txt.innerHTML = result;
                fighters2_txt.innerHTML = "";
                //breaking loop to allow other things to happen
                button.removeEventListener("click", fight, false);

                document.querySelector('.buttonblue').innerHTML = 'DONE!!!';
            }

          }
    }
// function deciding and displaying a winner based on amount of health
    function winnerCheck(){
        var result="no winner";
        if (fighters[0].health<1 && fighters[1]<1)
        {
            result = "You Both Die";
        } else if(fighters[0].health<1){
            result =fighters[1].name+" WINS!!!"
        } else if (fighters[1].health<1)
        {
            result = fighters[0].name+" WINS!!!"
        }
       return result;
    }



})();