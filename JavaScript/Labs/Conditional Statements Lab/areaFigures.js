function main(shape, size) {
	let area = 0;
	if (shape === "square") {
		area = size * size;
	}
	if (shape === "circle") {
		area = 3.14159 * size * size;
	}
	console.log(`${area.toFixed(2)}`);
}


main("circle", 25);