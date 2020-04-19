$(document).ready(function() {
	var session = $("#session").val()
	var username = $("#un").val()
	if(session == username)
		$("#buttons").css("visibility", "hidden");

	$(':radio').change(function() {
		var value = this.value;

	    var urlParams = new URLSearchParams(window.location.search);
	    var username = urlParams.get('username');;
	    console.log("script " +username + " " + value);
	    $.get('/submitRating', {rating:value, username: username}, function(result){

	    });$("#useractions").css("visibility", "hidden");
	    window.location.replace('/ratingsuccess?username='+username)
	});

});
