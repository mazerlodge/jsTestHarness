
function doTest() {

	var x = 1; 

	for (var i=0; i<3; i++) {
		x += 5 * i;
	}

	console.log(x);

	return x;
	
}

function go() {

	// populate out message
	document.forms['a'].out.value = doTest();

}
