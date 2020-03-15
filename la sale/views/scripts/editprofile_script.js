
function validate() {
    var username = $("#usernamei");
    var pass = $("#password");
    var cpass = $("#confirmpassword");
    var college = $("#collegei");
    var about = $("#abouti");
    var flag = true;    

    // Check for empty strings
    if(pass.val() != cpass.val()) {
        pass.css("background-color", "#e39494");
        cpass.css("background-color", "#e39494");
        flag = false;
    }
    else{
        pass.css("background-color", "white");
        cpass.css("background-color", "white");
    }
    
    return flag;
}

$(document).ready(function() {
    
    $(".savebtn").click(function () {
        var username = $("#usernamei");
        var pass = $("#password");
        var cpass = $("#confirmpassword");
        var college = $("#collegei");
        var about = $("#abouti");
        var flag = validate();

        if(flag){

            if(username.val() !="") {
                $("#username").text(username.val());
            }

            if(college.val() !="") {
                $("#college").text(college.val());
            }

            if(about.val() !="") {
                $("#about").text(about.val());
            }

            $("#msg").text("");
            
            // insert change password here
        }
        else {
            $("#msg").text("Highlighted fields are not valid");
        }
            
    });
});