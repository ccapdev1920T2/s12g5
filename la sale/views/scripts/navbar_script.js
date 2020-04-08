$(document).ready(function() {
    $("#search_nav").click(function() {
    	var item = $("#search_item").val()
    	console.log('hello')
        window.location.replace("/searchnav?search=" + item)
    });
})
