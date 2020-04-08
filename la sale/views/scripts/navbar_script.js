$(document).ready(function() {
    $("#search_nav").click(function() {
    	var item = $("#search_item").val()
    	console.log('hello')
    	console.log(item)
    	
    	var link = "/searchnav?search="+item
        window.location.replace(link)
    });
})
