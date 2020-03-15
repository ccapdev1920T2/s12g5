function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validate() {
    var email = $("#email");
    var fname = $("#fname");
    var lname = $("#lname");
    var username = $("#username");
    var pass = $("#password");
    var cpass = $("#confirmpassword");
    var idnum = $("#idnum");
    var college = $("#college");
    var collegee = $("#collegee");
    var bday = $("#bday");

    var flag = true;

    // Check for empty strings
    if(email.val()=="") {
        email.css("background-color", "#e39494");
        flag = false;
    }
    else{
        email.css("background-color", "white");
    }

    if(fname.val()=="") {
        fname.css("background-color", "#e39494");
        flag = false;
    }
    else{
        fname.css("background-color", "white");
    }

    if(lname.val()=="") {
        lname.css("background-color", "#e39494");
        flag = false;
    }
    else{
        lname.css("background-color", "white");
    }

    if(username.val()=="") {
        username.css("background-color", "#e39494");
        flag = false;
    }
    else{
        username.css("background-color", "white");
    }

    if(pass.val()=="") {
        pass.css("background-color", "#e39494");
        flag = false;
    }
    else{
        pass.css("background-color", "white");
    }

    if(cpass.val()=="") {
        cpass.css("background-color", "#e39494");
        flag = false;
    }
    else{
        cpass.css("background-color", "white");
    }
    
    if(college.val()=="") {
        college.css("background-color", "#e39494");
        flag = false;
    }
    else{
        college.css("background-color", "white");
    }

    var numbers = /^[0-9]+$/;
    if(idnum.val()=="" || idnum.val().length != 8 || !idnum.val().match(numbers)) { // id number length
        idnum.css("background-color", "#e39494");
        flag = false;
      
    }
    else{
        idnum.css("background-color", "white");
    }

    if(bday.val()=="") {
        bday.css("background-color", "#e39494");
        flag = false;
    }
    else{
        bday.css("background-color", "white");
    }

    if(pass.val() != cpass.val()) {
        pass.css("background-color", "#e39494");
        cpass.css("background-color", "#e39494");
        flag = false;
    }

    if(!validateEmail(email.val())){
        console.log(validateEmail(email.val()));
        email.css("background-color", "#e39494");
        flag = false;
    }
    
    return flag;
}

$(document).ready(function() {
    
    $("#register").click(function () {
        var flag;
        flag = validate();

        if(flag) {
            window.location.replace("userlogin.html");
        }
        else {
            $("#msg").text("Highlighted fields are not valid");
        }
            
    });
});