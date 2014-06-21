/**
 * Duel Fight Game 3
 * Date: 6/20/14
Corey McLauchlin
 Assignment week 3 - Duel

*/

// this function executes at the bottom
(function(){

    console.log("FIGHT!!!");
//elements are pulled in for both fighters by id
    var fighters1_txt = document.getElementById("kabal");
    var fighters2_txt = document.getElementById("kratos");
    var round_txt = document.getElementById("round");
    var button = document.getElementById("fight_btn");
//this add an event listener for when the button is clicked
    button.addEventListener("click", fight, false);
// these are the fighters into objects for manipulation of DOM
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
//manipulation of DOM elements and display of character stats
   round_txt.innerHTML = "Click fight button";
   fighters1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
   fighters2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;


//function which displays player health, round information, computes damage, and displays winner
    function fight(){
        fighters1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighters2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;


            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //puts damage calculation into an easy to use variable
            var f1 = Math.floor(Math.random()*fighters[0].damage + fighters[0].damage *.5);
            var f2 = Math.floor(Math.random()*fighters[1].damage + fighters[1].damage *.5);


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
                //if there is no winner yet, this displays current health
                fighters1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
                fighters2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

            } else{
                //if there is a winner this
                fighters1_txt.innerHTML = result;
                fighters2_txt.innerHTML = "";
                //ends listening event, you need this because we add an event listener
                button.removeEventListener("click", fight, false);
//this occurs after a winner is found
                document.querySelector('.buttonblue').innerHTML = 'DONE!!!';
            }


    }
// function deciding and displaying a winner based on amount of health
    function winnerCheck(){
        var result="no winner";
        if (fighters[0].health<1 && fighters[1]<1)
        {
            result = "You Both Die";
        } else if(fighters[0].health<1){
            result =fighters[1].name+" WINS!!!";
        } else if (fighters[1].health<1)
        {
            result = fighters[0].name+" WINS!!!";
        }
       return result;
    }



})();