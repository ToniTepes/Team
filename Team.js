var inquirer = require("inquirer");

function Teammate(name, position, offense, defense) {
   this.name = name;
   this.position = position;
   this.offense = offense;
   this.defense = defense;
}

Teammate.prototype.printInfo = function() {
   console.log("Name: " + this.name + "\nPosition: " + this.position +
   "\nOffense: " + this.offense + "\nDefense: " + this.defense);
   console.log("---------------");
};

var count = 0;

var teammateArray = [];
var subArray = [];

var teamInput = function() {
   if (count < 3) {
       console.log("NEW TEAMMATE");

       inquirer.prompt([
          {
              name: "name",
              message: "What is your name?"
          }, {
               name: "position",
               message: "What is your current position?"
          }, {
               name: "offense",
               message: "What is your offensive rating?"
          }, {
               name: "defense",
               message: "What is your defensive rating?"
          }
       ]).then(function(answers) {
           var newTeammate = new Teammate(
               answers.name,
               answers.position,
               answers.offense,
               answers.defense);

               count++;
           if (count > 2) {
               subArray.push(newTeammate);
               teamInput();
           } else {
               teammateArray.push(newTeammate);
               teamInput();
           }
           
        //    teamInput();
       });
   }
   else {
       for (var i = 0; i < teammateArray.length; i++) {
           teammateArray[i].printInfo();
       }
        console.log("Sub: " + subArray);
        playGame();
   }
   
};

teamInput();

var ranAtk;
var ranDef;

var score = 0;


function playGame() {
    for (i=0; i < 5; i++) {
        console.log("Played Game");
        ranAtk = Math.floor(Math.random() * 20) + 1;
        ranDef = Math.floor(Math.random() * 20) + 1;
        console.log(ranAtk, ranDef);
        var offense = parseInt(teammateArray[0].offense) + parseInt(teammateArray[1].offense);
        var defense = parseInt(teammateArray[0].defense) + parseInt(teammateArray[1].defense);
        console.log(offense);

        if (ranAtk < offense) {
            console.log("You won a point");
            score++;
        }
        if (ranDef > defense) {
            console.log("You lost a point");
            score--;
        }

        console.log(score);
    }
};

