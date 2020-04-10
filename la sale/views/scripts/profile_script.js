$(document).ready(function() {

    $("#submitrating").click(function () {
        console.log("h");
        var value = $("#ratings").val();
        var username = $("#un").val();  
        $.get('/submitRating', {rating:value, username: username}, function(result){
          
            $("#rating").text(result); 
        });        
    });

});

