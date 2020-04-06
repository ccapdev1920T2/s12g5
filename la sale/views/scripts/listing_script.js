
var listingid;
$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    listingid = urlParams.get('listingid');

    var bidrange = new Array;
    bidrange[0] = parseFloat($("#lb").text());
    bidrange[1] = parseFloat($("#ub").text());

    $("#raisebid").click(function() {
        console.log("hello");
        var hbid = $("#highestbid");
        var price = $("#price");
        var ihbid = parseFloat(hbid.text());
    
        
        if(price.val() > bidrange[1] || price.val() < bidrange[0]) {
            price.css("background-color", "#e39494");
            alert("Your bid is not in range of the valid amount");
        }
        else { 
            if (price.val() <= ihbid){
                price.css("background-color", "#e39494");
                alert("You can not bid lower than the highest bid");
            }
            else { 
                $("#highestbid").text(price.val());
                price.css("background-color", "white");
            }
        }
        
        

        
    });

    var year = $("#year").text();
    var month = $("#month").text();
    var day = $("#days").text();
    var hour = $("#hours").text();
    var min = $("#minutes").text();

    
    var division = $("#countdown");


    countdown(division,year, month, day, hour, min);
    
    
    //update status when opened
    $.get('/getEndDate', {listingid: listingid}, function(result) {
        var enddate = new Date(result.endDate);
        var nowDate = new Date(Date.now());

        if(nowDate.getTime() > enddate.getTime()) {
            $.get('/endBidding', {listingid: listingid}, function(result) {

            });
        }
    });
    

    
    
});

function countdown(division,year, month, day, hour, min) {
    var endDate = new Date(); 
    endDate = new Date(year, month - 1, day, hour, min); 
    $(division).countdown({until: endDate, format: 'DHMS', onExpiry: function() {
        $("#useractions").css("visibility", "hidden");
        $.get('/endBidding', {listingid: listingid}, function(result) {

        });
    } ,
         expiryText: "Bidding Expired"}
    );

    checkTime(division);
}


function checkTime(division) {
    var periods = $(division).countdown('getTimes');
    var flag = true;

    for(var i = 0; i < 7; i++) {
        if(periods[i] != 0) {
            flag = false 
        }   
    }
    
    if(flag){
        console.log(flag + " bidding ended");
        $("#useractions").css("visibility", "hidden");
    }
}


