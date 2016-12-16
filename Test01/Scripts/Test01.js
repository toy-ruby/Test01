﻿$(document).ready(function () {

});

function getRandomInt(min, max) {
	var limit = $('[id$=inputText');
	var maxInt = $('[id$=maxIntText]').val();
	var minInt = $('[id$=minIntText]').val();
	
	var ret = Math.floor(Math.random() * (maxInt - minInt + 1)) + parseInt(minInt);
	return ret;
}

function onClick() {
    // if count != nothing, loop count times
    var count = $('[id$=countText]').val();
    var maxVal = $('[id$=maxIntText]').val();
    var minVal = $('[id$=minIntText]').val();
    $('[id$=outputTextBox]').val("");

    if (count == "")
    {
        $('[id$=outputTextBox]').val(getRandomInt(maxVal, minVal));
    } else {
        for (var i = 0; i < count; i++) {
            $('[id$=outputTextBox]').val($('[id$=outputTextBox]').val() + getRandomInt(maxVal, minVal) + " ");
        }
    }    
}

function getRandomNumber()
{
    $.ajax({
        type: "POST",
        url: "http://localhost:60673/randomnumber.asmx/GetRandomNumber",
        contentType: "application/json; charset=utf-8",
        data: {},
        dataType: "json",
        success: setOutput,
        error: throwError
    });
}

function setOutput(data, status)
{
    var out = data.d;
    document.getElementById("randomOutTextBox").innerHTML = out;
}

function throwError(xmlRequest)
{
    var out = xmlRequest.status;
    alert(xmlRequest.status + " " + xmlRequest.statusText + " " + xmlRequest.responseText);
    document.getElementById("errorOutput").innerHTML = xmlRequest.responseText;
}