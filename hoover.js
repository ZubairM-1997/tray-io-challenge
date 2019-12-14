class Room{
	constructor(x_lim, y_lim){
		this.x_lim = x_lim
		this.y_lim = y_lim
	}
}




class Robot{
	constructor(x , y, dirtpoint_array, logger){

		if (typeof x !== "number" && typeof y !== "number"){
			 throw Error("You did not enter integers for the coordinates")
		}

		for (let i = 0; i++; i < dirtpoint_array.length){
			if(Array.isArray(dirtpoint_array[i] === false)) {
				throw Error("Dirtpoint coordinates must be in a 2D Array!")
			}
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

		if ( x_lim % 1 !== 0 && y_lim % 1 !== 0){
			throw Error("Coordinates should not be floats")
		}

		if (typeof x_lim !== "number" && typeof y_lim !== "number"){
			throw new Error("Coordinates should be numbers only")
	   }

	   if (x_lim < this.x && y_lim < this.y){
			throw new Error("The hoover must be placed inside the room")
	   }

	   for (let i = 0; i < this.dirtpoint_array.length; i++){
		   if(this.dirtpoint_array[i][0] > x_lim && this.dirtpoint_array[i][1] > y_lim){
				throw new Error("The room must contain all the dirtpoints")
		   }
	   }

		this.roomDimensions = new Room(x_lim, y_lim);

	}


	processInstructions(str){

		let regex = /^[NESW]+$/

		if (typeof str !== "string"){
			throw new Error("Instructions were not in a string format")
		}

		if (regex.test(str) === false){
			throw new Error("Invalid set of instructions")
		}

		for (let i = 0; i < str.length; i++){
			this.move(str[i])
		}

		this.logger(this.x, this.y)
		this.logger(this.pointsCleaned)


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