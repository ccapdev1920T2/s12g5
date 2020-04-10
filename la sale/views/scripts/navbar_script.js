$(document).ready(function() {
    $("#search_nav").click(function() {
    	var item = $("#search_item").val()

        var url = "/searchnav?search=" + item;
        console.log(url);
        window.location.href=  url;
    });

})
