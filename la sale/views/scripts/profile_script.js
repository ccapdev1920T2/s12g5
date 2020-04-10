$(document).ready(function() {

    $("#submitrating").click(function () {
        console.log("h");
        var value = $("#ratings").val();

        var urlParams = new URLSearchParams(window.location.search);
        var username = urlParams.get('username');;
        console.log("script " +username + " " + value);
        $.get('/submitRating', {rating:value, username: username}, function(result){
            console.log("result " + result);
            $("#rating").text(result); 
        });        
    });

});

