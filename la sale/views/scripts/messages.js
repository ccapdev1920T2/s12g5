$(document).ready(function() {

    $("#sendmail").click(function() {
        var username = $('#emailreceiver').val();
        var message = $('#message').val();

        $.get('/getSendMessage', {username:username, message:message}, function(result) {
            if(result) {

                success();
                $('#emailreceiver').val('');
                $('#message').val('');
            }
            else {
                error();
                $('#emailreceiver').val('');
                $('#message').val('');
            }
        });
    })

    function success() {
        $('#alerts').append(
            " <div class='alert alert-dismissible fade show alert-success' role='alert' id='alertmain'> <strong>Success</strong> Your message hase been sent. <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>"
        );
    }
    function error() {
        $('#alerts').append(
            " <div class='alert alert-dismissible fade show alert-danger' role='alert' id='alertmain'> <strong>Uh-oh</strong> Something is wrong. Please enter a valid username. <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>"
        );
    }

    


});