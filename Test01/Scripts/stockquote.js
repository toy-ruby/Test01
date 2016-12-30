$(document).ready(function ()
{
    $('#btnGet').click(function (event)
    {
        var req = new Object();
        req.input = $('#symbolText').val();

        // https://php.radford.edu/~jcdavis/D2L/classes/it425/lectmat/webserv/tempws_api.php?temp=40&scale=F
        // http://dev.markitondemand.com/Api/v2/Lookup

        var url = "https://php.radford.edu/~jcdavis/D2L/classes/it425/lectmat/webserv/tempws_api.php"

        var xhr = getCORSRequest('GET', url);
        if (!xhr) {
            throw new Error('CORS not supported');
        }

        // Sent request
        xhr.send();

        // Retrieve response text
        var text = xhr.responseText;

        xhr.onload = function ()
        {
            var responseText = xhr.responseText;
            console.log(responseText);
            // process the response.
        };

        xhr.onerror = function ()
        {
            console.log('There was an error!');
        };

        //$.ajax(
        //{
        //    type: "GET",
        //    url: url,
        //    contentType: "application/x-www-form-urlencoded",
        //    data: req.symbol,
        //    success: function ()
        //    {
        //        $("#outputText").val("");
        //    },
        //    error: function ()
        //    {
        //        alert(xmlRequest.status + " " + xmlRequest.statusText + " " + xmlRequest.responseText);
        //    }
        //})
    });
});

function getCORSRequest(method, url)
{
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true);

    } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);

    } else {

        // Otherwise, CORS is not supported by the browser.
        xhr = null;
    }

    return xhr;
}

