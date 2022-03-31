# MarsRover

## Introduction
This is a solution, implemented as a basic console application in JavaScript using node.js, to the problem detailed in the document "Mars Rover Challenge". These notes describe briefly some of the features of the solution.

The grid as specified starts with 1, but internally it is convenient to model the grid starting at 0. A grid of 100 by 100 is specified and this is coded into a variable 'gridSize'. This could be changed relatively easily if a different grid size were required in future.

The function 'moveRover' adjusts the position and direction of the rover using a switch statement based on each command. The direction variable is a number between 0 and 3, corresponding to the compass directions starting at North and moving clockwise. This simplifies changing direction by allowing it to be done by modulo arithmetic.

## Input
The script rover.js takes text input from the command line, which should be a string with up to five commands on the same line, optionally separated by spaces.

For example: `50m left 23m left 4m`

If no input is given, the input string will be deemed invalid but the current position and direction will still be returned. The user can enter 'quit' to exit the application.

Some basic input validation is performed, to make sure that the input is in the expected format. If it is not, an error message is displayed and the user is asked for input again. This includes permitting a space in case the input is supplied in ISO 80000 format.

## Output
The script outputs the message "The new position is (position) and direction is (direction)"
  
The user is then asked for their next input, with the rover starting from its last calculated position and direction.
