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

           teammateArray.push(newTeammate);
           count++;
           teamInput();
       });
   }
   else {
       for (var i = 0; i < teammateArray.length; i++) {
           teammateArray[i].printInfo();
       }
   }
};

teamInput();
