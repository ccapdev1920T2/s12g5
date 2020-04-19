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
    var urlParams = new URLSearchParams(window.location.search);
    listingid = urlParams.get('listingid');


    function isValidBuyOut(field, callback) {
        var buyout = validator.trim($('#buyout').val());
        var emptyBuyOut = validator.isEmpty(buyout);

        if(!emptyBuyOut){
            $.get('/getCheckBuyOut', {_id: listingid}, function(result){
                if(parseFloat(buyout) > parseFloat(result.buyOutPrice)) {

                    if(field.is($('#buyout'))) {
                        $('#buyout').removeClass('is-invalid');
                        $('#buyout').addClass('is-valid');
    
                        // $('#buyoutError').removeClass('invalid-feedback');
                        // $('#buyoutError').addClass('valid-feedback');
                        $('#buyoutError').text('looks good!');
                    }
                    return callback(true);
                }
                else {
                    if(field.is($('#buyout'))) {
                        $('#buyout').removeClass('is-valid');
                        $('#buyout').addClass('is-invalid');
    
                        // $('#buyoutError').removeClass('valid-feedback');
                        // $('#buyoutError').addClass('invalid-feedback');
                        $('#buyoutError').text('The new buyout price must be greater that the current price.');
                    }
                    return callback(false);
                }
            });
        }
        else {
            $('#buyout').removeClass('is-invalid');
            $('#buyout').removeClass('is-valid');
            $('#buyoutError').text('');
            return callback(true);
        }
    }

    function isValidDate(field, callback) {
        var enddate = validator.trim($('#enddate').val());
        var emptyEnddate = validator.isEmpty(enddate);

        if(!emptyEnddate){
            $.get('/getCheckEndDate', {_id: listingid}, function(result){
                if(enddate > result.endDate) {
                    if(field.is($('#enddate'))) {
                        $('#enddate').removeClass('is-invalid');
                        $('#enddate').addClass('is-valid');
    
                        // $('#endDateError').removeClass('invalid-feedback');
                        // $('#endDateError').addClass('valid-feedback');
                        $('#endDateError').text('looks good!');
                    }
                    return callback(true);
                }
                else {
                    if(field.is($('#enddate'))) {
                        $('#enddate').removeClass('is-valid');
                        $('#enddate').addClass('is-invalid');
    
                        // $('#endDateError').removeClass('valid-feedback');
                        // $('#endDateError').addClass('invalid-feedback');
                        $('#endDateError').text('The new date should be greater than the current date.');
                    }
                    return callback(false);
                }
            });
        }
        else {
            $('#enddate').removeClass('is-invalid');
            $('#enddate').removeClass('is-valid');
            $('#endDateError').text('');
            return callback(true);
        }
    }

    function hasEdits() {
        var buyout = validator.trim($("#buyout").val());
        var desc = validator.trim($("#desc").val());
        var images = validator.trim($("#images").val());
        var enddate = validator.trim($("#enddate").val());
        
        return !validator.isEmpty(buyout) || !validator.isEmpty(desc) || !validator.isEmpty(images) || !validator.isEmpty(enddate)
    }

    function validateField(field) {

        var edits = hasEdits();

        isValidBuyOut(field, function(validBuyOut){
            isValidDate(field, function(validDate) {
                // console.log(edits + " " + validBuyOut + " " + validDate)
                if(edits && validBuyOut && validDate) {
                    $("#confirm").prop('disabled', false);
                    console.log('hello')
                }
                else {
                    $("#confirm").prop('disabled', true);
                }
            });
        });
    }

    $('#buyout').keyup(function () {
        validateField($('#buyout'));
    });
    $('#desc').keyup(function () {
        validateField($('#desc'));
    });
    $('#images').keyup(function () {
        validateField($('#images'));
    });
    $('#enddate').blur(function () {
        validateField($('#enddate'));
    });
 
    
    $("#confirm").click(function () {
        var flag;
        // flag = validate();
        console.log("hello");

        if(flag) {
            window.location.replace("/mylistings?_id={{_id}}");
        }
        else {
            $("#msg").text("Highlighted fields are not valid");
        }
            
    });
});