//Event listener to calculate roll after the button is clicked.
document.getElementById("letsroll").addEventListener("click", setupDice);

//Function that calculates the roll based on type and number of dice selected.
function setupDice() {
	
    var d4 = document.getElementById("D4");
	var d6 = document.getElementById("D6");
	var d8 = document.getElementById("D8");
	var d10 = document.getElementById("D10");
	var d12 = document.getElementById("D12");
	var d20 = document.getElementById("D20");
	var numDice = parseInt(document.getElementById("numdice").value, 10); //number of dice from user converted to an integer.
	var modifier = parseInt(document.getElementById("modifier").value, 10); //modifier from user converted to an integer.
	var totalDice = 0; //total of the dice roll
	var result = "Result"; //total dice and modifiers to be output as a string.
	
	if (d4.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.floor(Math.random() * (4 - 1 + 1)) + 1;
		}
	}
	else if (d6.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
	}
	else if (d8.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.floor(Math.random() * (8 - 1 + 1)) + 1;
		}
	}
	else if (d10.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.floor(Math.random() * (10 - 1 + 1)) + 1;
		}
	}
	else if (d12.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		}
	}
	else if (d20.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.floor(Math.random() * (20 - 1 + 1)) + 1;
		}
	}
	
	totalDice += modifier; //adds modifier to the total dice roll.

	result = totalDice.toString(); //converts totalDice integer to a string.
	document.getElementById("resultp").textContent = "You rolled " + result; //replaces content of result div with the roll.
}
