$(document).ready(function() {
	$(':radio').change(function() {
		var value = this.value;

	    var urlParams = new URLSearchParams(window.location.search);
	    var username = urlParams.get('username');;
	    console.log("script " +username + " " + value);
	    $.get('/submitRating', {rating:value, username: username}, function(result){

	    });
	    window.location.replace('/ratingsuccess?username='+username)
	});

});
