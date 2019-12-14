let fs = require("fs")
let Robot = require("./hoover").Robot



const readFile = () => fs.readFile("./input.txt", 'utf8', function(err, data) {

	if(err){
		throw err;
	}


	let contents = data
	processFile(contents)

});




function processFile(contents){
	let result = contents.split("\n").filter(item => item.length > 0);

	let gridDimensions = result[0].split(" ");
	let x_limit = parseInt(gridDimensions[0] , 10)
	let y_limit = parseInt(gridDimensions[1] , 10)

	let initalPosition = result[1].split(" ")
	let x = parseInt(initalPosition[0] , 10);
	let y = parseInt(initalPosition[1] , 10);



	let twoDimensionArray = []

	for (let i = 2; i < result.length - 1; i++){
		let small_array = []
		let dirtCoordinate = result[i].split(" ")

		let x_dirt = parseInt(dirtCoordinate[0], 10)
		let y_dirt = parseInt(dirtCoordinate[1], 10)

		small_array.push(x_dirt)
		small_array.push(y_dirt)
		twoDimensionArray.push(small_array)
	}

	let rumba = new Robot(x, y, twoDimensionArray , console.log)
	rumba.obtainRoomDimensions(x_limit, y_limit)
	rumba.processInstructions(result[result.length - 1])


}

readFile();



