$(document).ready(function() {

    $("#submitrating").click(function () {
        console.log("h");
        var value = $("#ratings").val();
        var username = $("#un").text();  
        console.log("script " +username + " " + value);
        $.get('/submitRating', {rating:value, username: username}, function(result){
            console.log("result " + result);
            $("#rating").text(result); 
            window.location.assign(location)  
        });
        
    });

});

