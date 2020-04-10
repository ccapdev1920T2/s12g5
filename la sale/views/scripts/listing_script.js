
var listingid;
$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    listingid = urlParams.get('listingid');

    var activeStatus = null;

    var sessionUsername = 'lellings0';

    var bidrange = new Array;
    bidrange[0] = parseFloat($("#lb").text());
    bidrange[1] = parseFloat($("#ub").text()); // buyout price

    var hbid = $("#highestbid");
    var price = $("#price");
    var ihbid = parseFloat(hbid.text());
    



    updatePinned(sessionUsername, listingid);

    
    $("#raisebid").click(function() {
 
        if(price.val() > bidrange[1] || price.val() < bidrange[0]) { // Bid is not valid
            price.css("background-color", "#e39494");
            alert("Your bid is not in range of the valid amount");
        }
        else { 
            if (price.val() <= ihbid){ // lower than current highest
                price.css("background-color", "#e39494");
                alert("You can not bid lower than the highest bid");
            }
            else { 
                var highestBid = parseFloat(price.val());
                
                if(bidrange[1] == highestBid) { //buyout if max range
                    buyOut(listingid, sessionUsername, bidrange[1]);
                }
                else {
                    price.css("background-color", "white");
                    $.get('/raiseBid', {highestBid: highestBid, listingid: listingid, highestBidder: sessionUsername}, function() { // update db
                        $("#highestbid").text(price.val());
                        $("highestbidder").text(sessionUsername);
                    });
                    price.val("");
                }  
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
    

    $("#buyout").click(function() {
        buyOut(listingid, sessionUsername, bidrange[1]);
        $("#useractions").css("visibility", "hidden");
        $("#highestbid").text(bidrange[1]);
        $("#highestbidder").text("@"+sessionUsername);
        $(division).countdown('destroy');
        $(division).text('Bidding Closed');
    });

    $("#pin").click(function() {
        $("#pin").prop('disabled', true);
        pinListing(sessionUsername, listingid);
    });

    if(parseFloat($("#highestbid").text()) == bidrange[1]) { // If bought out
        $("#useractions").css("visibility", "hidden");
        $(division).countdown('destroy');
        $(division).text('Bidding Closed');
    }
    
});


function updatePinned(sessionUsername, listingid) {

    $.get('/updatePin', {listingid: listingid, archerUsername: sessionUsername}, function(result) {
        
       
        if(result.listingId == listingid && result.pinStatus.toLowerCase() == 'active') {
            console.log("matched " + result.listingId); 
            $("#pin").prop('disabled', true);
        }
    });
 
}

function pinListing(sessionUsername, listingid) {
    $.get('/pinListing', {listingid: listingid, archerUsername: sessionUsername}, function() {
    });
}


function buyOut(listingid, sessionUsername, buyOutPrice) {
    $.get('/buyOut', {listingid: listingid, highestBidder: sessionUsername, buyOutPrice: buyOutPrice}, function(result) {
        
    });
    activeStatus = false;
}

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
        $("#useractions").css("visibility", "hidden");
    }
}


