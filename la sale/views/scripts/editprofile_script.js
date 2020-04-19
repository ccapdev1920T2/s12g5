

$(document).ready(function() {
    
    $(".savebtn").click(function () {
        var username = $("#usernamei");
        var about = $("#abouti");
      
        if(username.val() !="") {
            $("#username").text(username.val());
        }

        if(about.val() !="") {
            $("#about").text(about.val());
        }


    });


    function isValidPassword() {
        var password = validator.trim($('#password').val());
        var confirmpassword = validator.trim($('#confirmpassword').val());
    
        if(password == confirmpassword && (!validator.isEmpty(password) && !validator.isEmpty(confirmpassword))){ // cpass matches pass
            
            $('#password').removeClass('is-invalid');
            $('#password').addClass('is-valid');
            $('#confirmpassword').removeClass('is-invalid');
            $('#confirmpassword').addClass('is-valid');

           
            $('#confirmPasswordError').removeClass('invalid-feedback');
            $('#confirmPasswordError').addClass('valid-feedback');
            $("#savesubmit").prop('disabled', false);
            $('#confirmPasswordError').text('tamas');
            return true;
        }
        else if (validator.isEmpty(password) && validator.isEmpty(confirmpassword)){
            $('#password').removeClass('is-invalid');
            $('#password').removeClass('is-valid');
            $('#confirmpassword').removeClass('is-invalid');
            $('#confirmpassword').removeClass('is-valid');
            $('#confirmPasswordError').removeClass('invalid-feedback');
            $('#confirmPasswordError').removeClass('valid-feedback');
            $('#confirmPasswordError').text('');
            $("#savesubmit").prop('disabled', false);
            return true;
        }
        else {
            $('#password').removeClass('is-valid');
            $('#password').addClass('is-invalid');
            $('#confirmpassword').removeClass('is-valid');
            $('#confirmpassword').addClass('is-invalid');

            $('#passwordError').removeClass('is-valid');
            $('#passwordError').addClass('is-invalid');
            $('#confirmPasswordError').removeClass('valid-feedback');
            $('#confirmPasswordError').addClass('invalid-feedback');

            $('#confirmPasswordError').text('passwords should match.');
            $("#savesubmit").prop('disabled', true);
            return false;
        }
    }

    function hasEdits() {
        var profilepic = validator.trim($("#profilepici").val());
        var password = validator.trim($("#password").val());
        var confirmpassword = validator.trim($("#confirmpassword").val());
        var about = validator.trim($("#abouti").val());

        var profilepicEmpty = validator.isEmpty(profilepic);
        var passwordEmpty = validator.isEmpty(password);
        var confirmpasswordEmpty = validator.isEmpty(confirmpassword);
        var aboutEmpty = validator.isEmpty(about);

        var flag = !profilepicEmpty || !confirmpasswordEmpty || !aboutEmpty;

        if(flag) {
            $("#savesubmit").prop('disabled', false);
        }
        else {
            $("#savesubmit").prop('disabled', true);
        }
    }   


    $('#password').keyup(function(){
        isValidPassword();
        console.log("hello?");
    });

    $('#confirmpassword').keyup(function(){
        isValidPassword();
    });

});