function validate() {
    var sprice = $("#startprice");
    var buyout = $("#buyout");
    var desc = $("#desc");
    var datetime = $("#enddate");

    var flag = true;

    var numbers = /^[+-]?\d+(\.\d+)?$/;

    // Check for empty strings
    if(sprice.val()!="" && !sprice.val().match(numbers)) {
        sprice.css("background-color", "#e39494");
        flag = false;
    }
    else{
        sprice.css("background-color", "white");
    }

    if(buyout.val()!="" && !buyout.val().match(numbers)) {
        buyout.css("background-color", "#e39494");
        flag = false;
    }

    if(sprice.val() <= buyout.val()){
        sprice.css("background-color", "#e39494");
        buyout.css("background-color", "#e39494");
        flag = false;
    }
    else{
        sprice.css("background-color", "white");
        buyout.css("background-color", "white");
    }

    

    return flag;
}

$(document).ready(function() {
    
    $("#confirm").click(function () {
        var flag;
        flag = validate();
        console.log("hello");

        if(flag) {
            window.location.replace("/mylistings?_id={{_id}}");
        }
        else {
            $("#msg").text("Highlighted fields are not valid");
        }
            
    });
});