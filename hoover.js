class Room{
	constructor(x_lim, y_lim){
		this.x_lim = x_lim
		this.y_lim = y_lim
	}
}




class Robot{
	constructor(x , y, dirtpoint_array, logger){

		if (isNaN(x) || isNaN(y)){
			 throw TypeError("Unrecognisable coordinates entered")
		}

		if (x < 0 || y < 0){
			throw Error(`Hoover should not have negative starting position, ${x}, ${y}`)
		}


		this.x = x
		this.y = y


		this.dirtpoint_array = dirtpoint_array
		this.logger = logger
		this.alreadyCleaned = new Array(dirtpoint_array.length);
		this.alreadyCleaned.fill(false);
		this.pointsCleaned = 0;

	}

	obtainRoomDimensions(x_lim, y_lim){

		if ( x_lim % 1 !== 0 || y_lim % 1 !== 0){
			throw new Error("Coordinates should not be floats")
		}

		if (isNaN(x_lim) || isNaN(y_lim)){
			throw new TypeError("Invalid set of coordinates entered")
	   }

	   if (x_lim < this.x || y_lim < this.y){
			throw new Error("The hoover must be placed inside the room")
	   }

	   for (let i = 0; i < this.dirtpoint_array.length; i++){
		   if(this.dirtpoint_array[i][0] > x_lim || this.dirtpoint_array[i][1] > y_lim){
				throw new Error(`Dirtpoint cordinates ${this.dirtpoint_array[i][0]} , ${this.dirtpoint_array[i][1]} needs to lie within the room dimensions ${x_lim}, ${y_lim}`)
		   }
		   else if(this.dirtpoint_array[i][0] < 0 || this.dirtpoint_array[i][1] < 0){
				throw new Error(`Dirtpoint cordinates, ${this.dirtpoint_array[i][0]} , ${this.dirtpoint_array[i][1]} cannot be less that 0 `)
	   }
	   }

		this.roomDimensions = new Room(x_lim, y_lim);

	}


	processInstructions(str){

		let regex = /^[NESW]+$/

		if (typeof str !== "string"){
			throw new TypeError("Instructions were not in a string format")
		}

		if (regex.test(str) === false){
			throw new Error("No or Invalid set of instructions were entered")
		}

		for (let i = 0; i < str.length; i++){
			this.move(str[i])
		}

		this.logger(`The final coordinates of the hoover are ${this.x}, ${this.y}`)
		this.logger(`The number of points cleaned by the hoover are ${this.pointsCleaned}`)
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



module.exports = {Robot, Room}