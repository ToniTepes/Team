var inquirer = require("inquirer");
function Teammate(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
}

Teammate.prototype.printInfo = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + 
    this.offense + "\nDefense: " + this.defense);
    console.log("_____________________");
};

var count = 0; 
var team = [];

var teamInput = function() {
    if ( count < 3) {
        console.log("New Teammate");
        inquirer.prompt([
            {
                name: "Name",
                message: "What is your name?"
              }, {
                name: "Position",
                message: "What is your current position?"
              }, {
                name: "Offense",
                message: "Whats your offensive rating?"
              }, {
                name: "Deffensive",
                message: "What is your favorite deffensive rating?"
              }
            ]).then(function(answers) {
                var newTeammate = new Teammate(
                    answers.name,
                    answers.position,
                    answers.offense,
                    answers.defense,);
                    team.push(newTeammate);
                    count++;
                    teamInput();
            });
}
else {
    for ( var x = 0; x < team.length; x++) {
        team[x].printInfo();
    }
}
};

teamInput();