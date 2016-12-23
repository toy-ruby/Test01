$(document).ready(function () {

    // Hide error-banner by default
    $('.error-banner').hide();

    // Click Random Button
    $('#RandomButton').click(function(event)
    {
        var url = "http://localhost:60673/randomnumber.asmx/GetRandomNumber";
        $.ajax({
            type: "POST",
            url: url,
            contentType: "application/json; charset=utf-8",
            data: {},
            dataType: "json",
            success: setOutput,
            error: throwError
        });
    })

    // Click Ranged Random Button
    $('#RangedRandomButton').click(function (event) {
        var url = "http://localhost:60673/randomnumber.asmx/GetRandomNumberRng";
        var dataObj = {};
        dataObj.max = $("#maxRng").val();
        dataObj.min = $("#minRng").val();

        $.ajax({
            type: "POST",
            url: url,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(dataObj),
            dataType: "json",
            success: setOutput2,
            error: throwError
        });
    })
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
    document.getElementById("ContentPlaceHolder1_randomOutTextBox").value = out;
}

function setOutput2(data, status) {
    var out = data.d;
    document.getElementById("ContentPlaceHolder1_TextBox2").value = out;
}

function throwError(xmlRequest)
{
    var out = xmlRequest.status;
    alert(xmlRequest.status + " " + xmlRequest.statusText + " " + xmlRequest.responseText);
    document.getElementById("errorOutput").innerHTML = xmlRequest.responseText;
}