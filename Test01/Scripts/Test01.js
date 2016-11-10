$(document).ready(function () {
    
});

function getRandomInt(min, max) {
	var limit = $('[id$=inputText');
	var maxInt = $('[id$=maxIntText]').val();
	var minInt = $('[id$=minIntText]').val();

	var ret = Math.floor(Math.random() * (maxInt - minInt + 1)) + parseInt(minInt);
	//alert("ret type:" + typeof(ret) +
      //  "Math.floor type:" + typeof(Math.floor(Math.random() * (maxInt - minInt + 1))));
	return ret;
	//var tmp = output.value;
}

function onClick() {
    // TODO if count != nothing, loop count times
    $('[id$=outputTextBox]').val(getRandomInt($('[id$=maxIntText]').val(), $('[id$=minIntText]').val()));
}