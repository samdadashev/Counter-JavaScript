var count = 0;

function add() {
	count += 1;
	document.getElementById("lower").disabled = false;
	document.getElementById('counter').innerHTML = count;
}
function lower() {
	if (count == 0) {
		count = 0;
		document.getElementById("lower").disabled = true;

		window.alert('Die nummer darf nicht kleiner als Null sein '
		);
	} else {
		count--;
		document.getElementById('counter').innerHTML = count;

	}
}a
