function validate() {
    var username = $("#username");
    var password = $("#password");

    var flag = true;

    if(username.val()=="") {
        username.css("background-color", "#e39494");
        flag = false;
    }
    else{
        username.css("background-color", "white");
    }
    if(password.val()==""){
        password.css("background-color", "#e39494");
        flag = false;
    }
    else{
        password.css("background-color", "white");
    }

    return flag;
}


$(document).ready(function() {
    $("#submitlogin").click(function () {
        var flag;
        flag = validate();

        if(flag)
            window.location.replace("browselisting.html");
        else {
            $("#msg").text("The username or password is not valid");
        }
            
    });

    $("#signupsubmit").click(function() {
        window.location.replace("/signup")
        console.log("helo");
    });
});


