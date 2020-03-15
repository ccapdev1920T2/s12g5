$(document).ready(function() {
    var bidrange = new Array;
    bidrange[0] = parseFloat($("#lb").text());
    bidrange[1] = parseFloat($("#ub").text());

    $("#raisebid").click(function() {
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

    
    var division = $("#countdown");

    countdown(division,2020, 3, 23, 00, 43);
    
    
    

    
    
});

function countdown(division,year, month, day, hour, min) {
    var endDate = new Date(); 
    endDate = new Date(year, month - 1, day, hour, min); 
    $(division).countdown({until: endDate, format: 'DHMS', onExpiry: function() {$("#useractions").css("visibility", "hidden")} , expiryText: "Bidding Expired"}
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
        console.log(flag + "yea");
        $("#useractions").css("visibility", "hidden");
    }
}


