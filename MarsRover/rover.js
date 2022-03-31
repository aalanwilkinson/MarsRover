'use strict';

const gridSize = 100;
const directionMap = ["North", "East", "South", "West"]; // Text descriptors of compass directions

var position = 1; // Initialising position in square 1
var direction = 2; // Initialising direction to south

const prompt = require("prompt-sync")();

var tokenisedInput;

while ((tokenisedInput = getInput()) !== "q") {
    position = moveRover(position, tokenisedInput, gridSize);
    console.log("\nThe new position is", position, "and direction is", directionMap[direction], "\n");
}

function getInput() {
    var inputString = prompt("Enter the commands (max 5) or enter 'quit' to exit:  ");
    inputString = inputString.toLowerCase(); // Accept input if it is typed with some uppercase

    if (inputString === "quit") return "q";

    const validationRegex = /^((left|right|[0-9]+ *m) ?){1,5}$/
    if (!validationRegex.test(inputString)) { // Tests for valid input
        console.log("\nSorry, the input was not valid. Please refer to the documentation for the required format.");
        return 0;
    }

    const tokenRegex = /left|right|[0-9]+/g
    var tokenisedInput = inputString.match(tokenRegex); // Creates an array of valid tokens from the raw input

    return tokenisedInput;
}

function moveRover(position, tokenisedInput, gridSize) {

    var positionX = --position % gridSize; // Grid is number starting at 1 but internally modelled starting at 0
    var positionY = (position - positionX) / gridSize;

    for (var i = 0; i < tokenisedInput.length; i++) { // Loops through each command
        switch (tokenisedInput[i]) {
            case "left":
                direction = (direction + 3) % 4;
                break;
            case "right":
                direction = (direction + 1) % 4;
                break;
            default:
                var magnitude = Number(tokenisedInput[i]);
                switch (direction) {
                    case 0:
                        positionY = Math.max(0, positionY - magnitude);
                        break;
                    case 1:
                        positionX = Math.min(gridSize - 1, positionX + magnitude);
                        break;
                    case 2:
                        positionY = Math.min(gridSize - 1, positionY + magnitude);
                        break;
                    case 3:
                        positionX = Math.max(0, positionX - magnitude);
                        break;
                    default:
                        break;
                }
                break;
        }
    }

    position = gridSize * positionY + positionX + 1; // Adding the 1 back to reflect grid starting at 1
    
    return position;
}

