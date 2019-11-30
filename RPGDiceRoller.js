document.getElementById("letsroll").addEventListener("click", setupDice);

function setupDice() {
	
    var d4 = document.getElementById("D4");
	var d6 = document.getElementById("D6");
	var d8 = document.getElementById("D8");
	var d10 = document.getElementById("D10");
	var d12 = document.getElementById("D12");
	var d20 = document.getElementById("D20");
	var numDice = parseInt(document.getElementById("numdice").value, 10);
	var totalDice = 0;
	var result = "Result";
	
	if (d4.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.round(Math.random() * 4);
		}
	}
	else if (d6.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.round(Math.random() * 6);
		}
	}
	else if (d8.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.round(Math.random() * 8);
		}
	}
	else if (d10.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.round(Math.random() * 10);
		}
	}
	else if (d12.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.round(Math.random() * 12);
		}
	}
	else if (d20.checked == true) {
		for (var i = 0; i < numDice; i++) {
			totalDice += Math.round(Math.random() * 20);
		}
	}
		
	result = totalDice.toString();
	document.getElementById("resultp").textContent = result;
}
