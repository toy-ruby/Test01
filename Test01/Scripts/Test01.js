$(document).ready(function () {

});

function getRandomInt() {
	var limit = $('[id$=inputText');
	var maxInt = $('[id$=maxIntText]').val();
	var minInt = $('[id$=minIntText]').val();

	$('[id$=outputTextBox]').val(Math.floor(Math.random() * (maxInt - minInt + 1) + minInt));
	var tmp = output.value;
}