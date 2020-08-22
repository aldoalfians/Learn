function testLogicalAnd(val) {
	// Only change code below this line

	if (val <= 50 && val >= 25) {
		return "Yes";
	}

	// Only change code above this line
	return "No";
}

console.log(testLogicalAnd(10));

function testLogicalAnd(val) {
	// Only change code below this line

	if (val <= 50) {
		if (val >= 25) {
			return "Yes";
		}
	}

	// Only change code above this line
	return "No";
}

console.log(testLogicalAnd(50));
