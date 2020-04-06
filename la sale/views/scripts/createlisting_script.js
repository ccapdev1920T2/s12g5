function validate() {
    var name = $("#name");
    var brand = $("#brand");
    var sprice = $("#startprice");
    var buyout = $("#buyout");
    var desc = $("#desc");
    var starttime = $("#startdate");
    var datetime = $("#enddate");

    var flag = true;

    var numbers = /^[+-]?\d+(\.\d+)?$/;

    // Check for empty strings
    if(name.val()=="") {
        name.css("background-color", "#e39494");
        flag = false;
    }
    else{
        name.css("background-color", "white");
    }

    if(brand.val()=="") {
        brand.css("background-color", "#e39494");
        flag = false;
    }
    else{
        brand.css("background-color", "white");
    }

    if(sprice.val()=="" || !sprice.val().match(numbers)) {
        sprice.css("background-color", "#e39494");
        flag = false;
    }
    else{
        sprice.css("background-color", "white");
    }

    if(buyout.val()=="" || !buyout.val().match(numbers)) {
        buyout.css("background-color", "#e39494");
        flag = false;
    }
    else{
        buyout.css("background-color", "white");
    }

    if(desc.val()=="") {
        desc.css("background-color", "#e39494");
        flag = false;
    }
    else{
        desc.css("background-color", "white");
    }

    if(starttime.val()=="") {
        starttime.css("background-color", "#e39494");
        flag = false;
    }
    else{
        starttime.css("background-color", "white");
    }

    if(datetime.val()=="") {
        datetime.css("background-color", "#e39494");
        flag = false;
    }
    else{
        datetime.css("background-color", "white");
    }

    return flag;
}

$(document).ready(function() {
    
    $("#createbtnn").click(function () {
        var flag;
        flag = validate();
        console.log("hello");

        if(flag) {
            window.location.replace("/browse");
        }
        else {
            $("#msg").text("Highlighted fields are not valid");
        }
            
    });
});