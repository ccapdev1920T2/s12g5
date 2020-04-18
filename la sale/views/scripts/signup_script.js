
$(document).ready(function() {
    
    function isFilled() {
        var email = validator.trim($("#email").val());
        var fname = validator.trim($("#fname").val());
        var lname = validator.trim($("#lname").val());
        var username = validator.trim($("#username").val());
        var pass = validator.trim($("#password").val());
        var cpass = validator.trim($("#confirmpassword").val());
        var idnum = validator.trim($("#idnum").val());
        var college = validator.trim($("#college").val());
        var bday = validator.trim($("#bday").val());


        var emailEmpty = validator.isEmpty(email);
        var fnameEmpty =validator.isEmpty(fname);
        var lnameEmpty =validator.isEmpty(lname);
        var usernameEmpty = validator.isEmpty(username);
        var passEmpty = validator.isEmpty(pass);
        var cpassEmpty = validator.isEmpty(cpass);
        var idnumEmpty = validator.isEmpty(idnum);
        var collegeEmpty = validator.isEmpty(college);
        var bdayEmpty = validator.isEmpty(bday);

        return !emailEmpty && !fnameEmpty && !lnameEmpty && !usernameEmpty && !passEmpty && !cpassEmpty && !idnumEmpty && !bdayEmpty && !collegeEmpty;

    }

    function isValidEmail(field, callback) {
        var email = validator.trim($('#email').val());
        var isValidEmail = validator.isEmail(email);
        var flag = true;

        if(isValidEmail) {
            $.get('/getCheckEmail', {email: email}, function (result) {

                if(result.email != email && !validator.isEmpty(email)) {

                    if(field.is($('#email'))) {
                        $('#email').removeClass('is-invalid');
                        $('#email').addClass('is-valid');

                        $('#emailError').removeClass('is-invalid')
                        $('#emailError').addClass('is-valid')
                        $('#emailError').text('looks good!');
                        
                    }
                   return callback(true);
                   
                }
                else {
                    if(field.is($('#email'))) {
                        $('#email').removeClass('is-valid');
                        $('#email').addClass('is-invalid');

                        $('#emailError').removeClass('is-valid')
                        $('#emailError').addClass('is-invalid')
                        $('#emailError').text('Email number has already been used.');
                    }

                    return callback(false);
                }
            });
        }
        else {

            if(field.is($('#email'))) {

               if(validator.isEmpty(email)) {
                    if(field.is($('#email'))) {
                        $('#email').removeClass('is-valid');
                        $('#email').addClass('is-invalid');

                        $('#emailError').removeClass('is-valid')
                        $('#emailError').addClass('is-invalid')
                        $('#emailError').text('Email should not be empty.');
                    }
                }
                else {
                    $('#email').removeClass('is-valid');
                    $('#email').addClass('is-invalid');
    
                    $('#emailError').removeClass('is-valid');
                    $('#emailError').addClass('is-invalid');
                    $('#emailError').text('Please enter a valid e-mail.');
                }
               
            }
                
            return callback(false);
        }
    }

    function isValidID(field, callback) {

        
        var idnum = validator.trim($('#idnum').val());
        var isValidLength = validator.isLength(idnum, {min: 8, max: 8});


        if(isValidLength) {
            $.get('/getCheckID', {idnum: idnum}, function (result) {

                if(result.idnum != idnum) {

                    if(field.is($('#idnum'))) {
                        $('#idnum').removeClass('is-invalid');
                        $('#idnum').addClass('is-valid');

                        $('#idnumError').removeClass('is-invalid')
                        $('#idnumError').addClass('is-valid')
                        $('#idnumError').text('looks good!');
                    }
                    return callback(true);
                }
                else {

                    if(field.is($('#idnum'))) {
                        $('#idnum').removeClass('is-valid');
                        $('#idnum').addClass('is-invalid');

                        $('#idnumError').removeClass('is-valid')
                        $('#idnumError').addClass('is-invalid')
                        $('#idnumError').text('ID number has already been used.');
                    }
                    return callback(false);
                }
            });
        }
        else {

         
            if(field.is($('#idnum'))) {
                $('#idnum').removeClass('is-valid');
                $('#idnum').addClass('is-invalid');

                $('#idnumError').removeClass('is-valid')
                $('#idnumError').addClass('is-invalid')
                $('#idnumError').text('ID should be 8 digits.');
            }
                

            return callback(false);
        }
    }

    function isValidUsername(field, callback) {
        var username = validator.trim($('#username').val());

        $.get('/getCheckUsername', {username: username}, function (result) {

            if(result.username != username && !validator.isEmpty(username)) {

                if(field.is($('#username'))) {
                    $('#username').removeClass('is-invalid');
                    $('#username').addClass('is-valid');

                    $('#usernameError').removeClass('is-invalid');
                    $('#usernameError').addClass('is-valid');
                    $('#usernameError').text('looks good!');
                }
                return callback(true);
            }
            else if (validator.isEmpty(username)) {
                if(field.is($('#username'))) {
                    $('#username').removeClass('is-valid');
                    $('#username').addClass('is-invalid');

                    $('#usernameError').removeClass('is-valid');
                    $('#usernameError').addClass('is-invalid');
                    $('#usernameError').text('username should not be empty.');
                }
                return callback(false);
            }

           
            else {
                if(field.is($('#username'))) {
                    $('#username').removeClass('is-valid');
                    $('#username').addClass('is-invalid');

                    $('#usernameError').removeClass('is-valid')
                    $('#usernameError').addClass('is-invalid')
                    $('#usernameError').text('username has already been used.');
                }
                return callback(false);
            }
        });
    }

    function isValidPassword(field) {
        var password = validator.trim($('#password').val());
        var confirmpassword = validator.trim($('#confirmpassword').val());
        
        if(password == confirmpassword && (!validator.isEmpty(password) && !validator.isEmpty(confirmpassword))){ // cpass matches pass
            if(field.is($('#confirmpassword'))) {
                $('#password').removeClass('is-invalid');
                $('#password').addClass('is-valid');
                $('#confirmpassword').removeClass('is-invalid');
                $('#confirmpassword').addClass('is-valid');

                $('#passwordError').removeClass('is-invalid');
                $('#passwordError').addClass('is-valid');
                $('#confirmPasswordError').removeClass('is-invalid');
                $('#confirmPasswordError').addClass('is-valid');

                // $('#passwordError').text('looks good!');
                $('#confirmPasswordError').text('looks good!');
            }

            return true;
        }
        else {
            if(field.is($('#confirmpassword'))) {
                $('#password').removeClass('is-valid');
                $('#password').addClass('is-invalid');
                $('#confirmpassword').removeClass('is-valid');
                $('#confirmpassword').addClass('is-invalid');

                $('#passwordError').removeClass('is-valid');
                $('#passwordError').addClass('is-invalid');
                $('#confirmPasswordError').removeClass('is-valid');
                $('#confirmPasswordError').addClass('is-invalid');

                // $('#passwordError').text('looks good!');
                $('#confirmPasswordError').text('passwords should not be empty and should match.');
            }

            return false;
        }
    
    }

    function validateField(field, fieldName, error) {

        /*
            gets the value of `field` in the signup form
            removes leading and trailing blank spaces
            then checks if the trimmed value is empty.
        */
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(empty) {
         
            // field.prop('value', '');

            field.removeClass('is-valid');
            field.addClass('is-invalid');

            error.removeClass('is-valid')
            error.addClass('is-invalid')
            error.text(fieldName + ' should not be empty.');
        }

        else {
            // field.prop('value', '');
            field.removeClass('is-invalid');
            field.addClass('is-valid');

            error.removeClass('is-invalid')
            error.addClass('is-valid')
            error.text('looks good!');
         
        }

        var filled = isFilled();
        var validPassword = isValidPassword(field);

    
        isValidEmail(field, function(validEmail) {
            isValidUsername(field, function(validUsername){
                isValidID(field, function(validID) {
                    if(filled && validPassword && validEmail && validUsername && validID) {
                        $("#register").prop('disabled', false);
                    }
                    else {
                        $("#register").prop('disabled', true);
                    }
                });
            });
        });

       
    }



    $('#email').keyup(function () {
        validateField($('#email'), 'e-mail', $('#emailError'));
    });
    $('#fname').keyup(function () {
        validateField($('#fname'), 'first name', $('#fNameError'));
    });
    $('#lname').keyup(function () {
        validateField($('#lname'), 'last name', $('#lNameError'));
    });
    $('#username').keyup(function () {
        validateField($('#username'), 'username', $('#usernameError'));
    });
    $('#confirmpassword').keyup(function () {
        validateField($('#confirmpassword'), 'Password', $('#confirmPasswordError'));
    });
    $('#college').blur(function () {
        validateField($('#college'), 'college', $('#collegeError'));
    });
    $('#bday').blur(function () {
        validateField($('#bday'), 'birthday', $('#bdayError'));
    });
    $('#idnum').keyup(function () {
        validateField($('#idnum'), 'id number', $('#idnumError'));
    });
    





    // // Register Function Redirect
    // $("#register").click(function () {
    //     var flag;
    //     flag = validate();

    //     if(flag) {
    //         window.location.replace("/signupsuccess");
    //     }
    //     else {
    //         $("#msg").text("Highlighted fields are not valid");
    //     }
            
    // });
});