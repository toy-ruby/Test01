$(document).ready(function ()
{
    $('#btnGet').click(function (event)
    {
        var req = new Object();
        req.input = $('#symbolText').val();

        var url = "http://dev.markitondemand.com/Api/v2/Lookup";
        $.ajax(
        {
            type: "GET",
            url: url,
            contentType: "application/x-www-form-urlencoded",
            data: req.symbol,
            success: function ()
            {
                $("#outputText").val("");
            },
            error: function ()
            {
                alert(xmlRequest.status + " " + xmlRequest.statusText + " " + xmlRequest.responseText);
            }
        })
    });
});