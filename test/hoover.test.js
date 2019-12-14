const fs = require("fs")

let Robot = require("../hoover").Robot
let Room = require("../hoover").Room



describe("Robot Contructor" , () => {
	test("should create a Robot instance" , () => {
		let x = 2
		let y = 3
		let dirtpointArray = [[1,3], [3,4], [5, 1]]

		let robot = new Robot(x, y, dirtpointArray, () => {})
	})

	test("Coordinates should not be anything other that integers" , () => {
		let x = "X"
		let y = "8"
		let dirtpointArray = [[1,3], [3,4], [5, 1]]

		expect(() => {
			new Robot(x, y, dirtpointArray, () => {})
		}).toThrow();

	})


})

describe("Room dimensions" , () => {

	test("Dimensions should not be float" ,() => {
		let x = 2
		let y = 3
		let dirtpointArray = [[1,2], [2,1], [3,1]]

		let roomba = new Robot(x, y, dirtpointArray, () => {})

		let x_lim = 3.5
		let y_lim = 4.6

		expect(() => {
			roomba.obtainRoomDimensions(x_lim, y_lim)
		}).toThrow();


	})




	test("dimensions should be integers", () => {
		let x = 2
		let y = 3
		let dirtpointArray = [[1,3], [3,4], [5, 1]]
		let roomba = new Robot(x, y, dirtpointArray, () => {})

		let x_lim = "X"
		let y_lim = "5"

		expect(() => {
			roomba.obtainRoomDimensions(x_lim, y_lim)
		}).toThrow();

	})

	test("The dimensions of the room must be greater than the coordinates of the Hoover" , () => {

		let x = 6
		let y = 6
		let dirtpointArray = [[1,3], [3,4], [5, 1]]
		let roomba = new Robot(x, y, dirtpointArray, () => {})

		let x_lim = 4
		let y_lim = 3

		expect(() => {
			roomba.obtainRoomDimensions(x_lim, y_lim)
		}).toThrow();

	})

	test("The number of dirtpoints can only be inside the room" , () => {
		let x = 1
		let y = 2
		let dirtpointArray = [[1,3], [3,4], [5, 1], [2,6], [4,5], [3,7], [8, 0], [6,8], [5, 4], [3, 2], [5,6], [7,5], [9, 3], [2, 1], [4, 4], [6, 3], [8, 9], [3, 9]]
		let roomba = new Robot(x, y, dirtpointArray, () => {})

		let x_lim = 3
		let y_lim = 3

		expect(() => {
			roomba.obtainRoomDimensions(x_lim, y_lim)
		}).toThrow();

	})

})

describe("Process instructions", () => {
	test("Instructions should be in a string format", () => {
		let x = 2
		let y = 3
		let dirtpointArray = [[1,3], [3,4], [5, 1]]
		let roomba = new Robot(x, y, dirtpointArray, () => {})

		let instructions = [1 ,2 ,34, "N"]
		let invalidInstructions = "73HDO999382"

		expect(() => {
			roomba.processInstructions(instructions)
		}).toThrow();
	})

	test("Instructions should only contain the characters NEWS" ,() => {
		expect(() => {
			roomba.processInstructions(invalidInstructions)
		}).toThrow();

	})
})







