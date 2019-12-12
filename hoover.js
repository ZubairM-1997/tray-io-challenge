class Room{
	constructor(x_lim, y_lim){
		this.x_lim = x_lim
		this.y_lim = y_lim
	}
}




class Robot{
	constructor(x , y, dirtpoint_array){

		this.x = x
		this.y = y
		this.dirtpoint_array = dirtpoint_array
		this.alreadyCleaned = new Array(dirtpoint_array.length);
		this.alreadyCleaned.fill(false);
		this.pointsCleaned = 0;

	}

	obtainRoomDimensions(x_lim, y_lim){
		this.roomDimensions = new Room(x_lim, y_lim);

	}


	processInstructions(str){

		if (typeof str !== "string"){
			return null
		}

		let directions = str.toUpperCase();

		for (let i = 0; i < directions.length; i++){
			this.move(directions[i])
		}

		console.log(this.x, this.y)
		console.log(this.pointsCleaned)


	}

	move(char){

		switch(char){
			case "N":
				this.y++
				break;

			case "E":
				this.x++
				break;

			case "W":
				this.x--
				break;

			case "S":
				this.y--
				break;

		}

		this.withinBoundary(this.x, this.y)


	}



	withinBoundary(x, y){

		if (x <= this.roomDimensions.x_lim && y <= this.roomDimensions.y_lim){
			this.checkPoints(x, y)

		} else {
			this.x = this.roomDimensions.x_lim
			this.y = this.roomDimensions.y_lim

		}
	}

	checkPoints(x, y){
		for (let i =0; i < this.dirtpoint_array.length; i++){
			if (x === this.dirtpoint_array[i][0] && y === this.dirtpoint_array[i][1]){
				if (this.alreadyCleaned[i] === false){

					this.pointsCleaned++
					this.alreadyCleaned[i] = true
				}

			}

		}


	}



}

// Type checks on input
// duplicates
// large number of dirtpoints
// dirtpoints being out of bounds
// inital location being out of bounds
// floats/decimals




let fs = require("fs")

let contents;
let result;

let twoDimensionArray = []

let x_limit;
let y_limit;

let x;
let y;





const readFile = fs.readFile("./input.txt", 'utf8', function(err, data) {

	if(err){
		throw err;
	}

	contents = data
	processFile()

});

function processFile(){
	result = contents.split("\n").filter(item => item.length > 0);

	let gridDimensions = result[0].split(" ");
	x_limit = parseInt(gridDimensions[0] , 10)
	y_limit = parseInt(gridDimensions[1] , 10)

	let initalPosition = result[1].split(" ")
	 x = parseInt(initalPosition[0] , 10);
	 y = parseInt(initalPosition[1] , 10);





	for (let i = 2; i < result.length - 1; i++){
		let small_array = []
		let dirtCoordinate = result[i].split(" ")

		let x_dirt = parseInt(dirtCoordinate[0], 10)
		let y_dirt = parseInt(dirtCoordinate[1], 10)

		small_array.push(x_dirt)
		small_array.push(y_dirt)
		twoDimensionArray.push(small_array)
	}

	let rumba = new Robot(x, y, twoDimensionArray)
	rumba.obtainRoomDimensions(x_limit, y_limit)
	rumba.processInstructions(result[result.length - 1])


}


module.exports = {twoDimensionArray, x_limit, y_limit, x, y, Robot, processFile, readFile}

