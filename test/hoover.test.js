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

	test("The array of dirtpoints must be inside a 2D array" ,() => {
		let x = 1
		let y = 5
		let dirtpointArray = [1, 2, 4, 1, 2]


		expect(() => {
			new Robot(x, y, dirtpointArray, () => {})
		}).toThrow();

	})
})

describe("Room dimensions" , () => {
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

})

describe("Process instructions", () => {
	test("Instructions should be in a string format", () => {
		let x = 2
		let y = 3
		let dirtpointArray = [[1,3], [3,4], [5, 1]]
		let roomba = new Robot(x, y, dirtpointArray, () => {})

		let instructions = [1 ,2 ,34, "N"]
		expect(() => {
			roomba.processInstructions(instructions)
		}).toThrow();

	})
})







