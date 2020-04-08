$(document).ready(function() {
    $("#search_nav").click(function() {
    	var item = $("#search_item").val()

        var url = "/searchnav?search=" + item;
        console.log(url + " watttt");
        window.location.replace(url)
        // window.location.href=  url;

   
    });

    $("#test").click(function() {
    	var item = $("#search_item").val()
    	console.log('hello');
        window.location.replace("/browse")
    });
    
})
