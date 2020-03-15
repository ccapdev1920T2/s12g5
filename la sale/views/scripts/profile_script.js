$(document).ready(function() {

    $("#submitrating").click(function () {
        var value = $("#ratings").val();
        $("#rating").text(value);            
    });

});

