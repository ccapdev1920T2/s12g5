$(document).ready(function() {

    $("#submitrating").click(function () {
        var value = $("#ratings").val();
        var username = $("#un").val();
        $("#rating").text(value);    
        $.get('/submitRating', {rating:value, username: username}, function(result)){
        	$("#rating").text(result); 
        }        
    });

});

