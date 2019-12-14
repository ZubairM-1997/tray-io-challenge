#Tray.io Code Challenge

##The Problem
You will write a program that navigates an imaginary robotic hoover (much like a Roomba) through an equally imaginary room based on:
1) Room dimensions as X and Y coordinates, identifying the top right corner of the room rectangle. This room is divided up in grid-based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover positions. The bottom left corner is the point of origin for our coordinate system, so asthe room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.
2) Locations of patches of dirt, also defined by X and Y coordinates identifying the bottom left corner of those grid positions.
3)  An initial hoover position (X and Y coordinates like patches of dirt)
4) Driving instructions (as cardinal directions) where e.g. N and E mean "go north" and "go east" respectively).

The room will be rectangular, has no obstacles (except the room walls), no doors and all locations in the room will be clean (hoovering has no effect) except for the locations of the patches of dirt presented in the program input. Placing the hoover on a patch of dirt ("hoovering") removes the patch of dirt so that patch is then clean for the remainder of the program run. The hoover is always on - there is no need to enable it.

Driving into a wall has no effect (the robot skids in place).

##Goal
The goal of the program is to take the room dimensions, the locations of the dirt patches, the hoover location and the driving instructions as input and to then output the following:
1) The final hoover position (X, Y)
2)  The number of patches of dirt the robot cleaned up

##Deliverables
1) Must be written in Node.js / JavaScript, unless you have received different instructions from us.
2) Please do not use a compiler like TypeScript. We would like to assess hand written Node.js / JavaScript as this is what you will work in.
3) Can be a command-line, terminal or web application.
4) Must run on Mac OS X, Linux (x86-64) or in a modern web browser.
5) Can make use of any existing open source libraries that don't directly address the problem statement (use your best judgement).


###Thought Process
Instantly, I realised this is an Object-Oriented based Problem, however I did not use Inheritance for this issue, as it would cause unnecessary coupling, so rather than that, I used the practices of composition, somehow the the Robot Class would ask for the values of the Room class and set it as its own property. The reason why I used composition is that, the relationship is a HAS relationship, as in a Robot HAS a Room (to clean in this case).

Another issue was that I obviously had to find a way to read the input values on the input.txt file and feel them to the Robot  constructor and its methods, while making sure they are converted to the correct types.

###File Structure
Project
	|
	+-- node_modules
	|
	+-- README.md
	|
	+-- package.json
	|
	+-- package-lock.json
	|
	+-- input.txt
	|
	+-- hoover.js
	|
	+-- analyseFile.js
	|
	+-- test
		|
		+--hoover.test.js

###Getting started
1) Make sure you have the latest version of node installed
2) Clone this repository
3) In the terminal, type the command "npm install" to install the dependancies
4) In the terminal type the command "node analyseFile.js" to get the final output
5) To view the tests that are passing, type the command "npm test"

###Credits
For testing purposes, I used Jest as the testing framework

###Tests
I realised that in order for the user to enter the correct inputs, the best practices of TDD must be delivered, with that, I then refactored my code in order to obtain the maximum efficiency of the code. If you look at my tests, I have taken in consideration of the user entering worst case scenarios, such

1) Entering incorrect types when creating an instance of Robot and also (from composition), a Room
2) What if the Robot was placed outside the dimensions of the room?
3) What if the Room dimensions were entered as a floating point?
4) If the user enters an incorrect or unreadable set of instructions
5) If the dirtpoints were also outside the dimensions of the room.




