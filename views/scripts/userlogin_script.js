$(document).ready(function() {
    function isFilled() {
        var username = validator.trim($("#username").val());
        var password = validator.trim($("#password").val());

        var usernameEmpty = validator.isEmpty(username);
        var passwordEmpty = validator.isEmpty(password);

        return !usernameEmpty && !passwordEmpty;
    }

    function isValidUser(callback) {
        var username = validator.trim($('#username').val());
        var password = validator.trim($('#password').val());


        $.get('/getCheckLogin', {username: username, password: password}, function (result) {
            console.log(result)
            return callback(result);
        });
    }

    function validateField(field){
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);
        if(empty){
            $("#msg").text("The username or password is not valid");
        }
        else
            $("#msg").text("");

        isValidUser(function (validUser){
            if(validUser && isFilled()){
                $("#submitlogin").prop('disabled', false);
            }
            else {
                $("#submitlogin").prop('disabled', true);
                
            }
        })
    }


    $("#username").keyup(function(){
        validateField($('#username'));
    })

    $("#password").keyup(function(){
        validateField($('#password'));
    })
});



