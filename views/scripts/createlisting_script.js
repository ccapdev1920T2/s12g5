$(document).ready(function() {
    function isFilled(){
        var name = validator.trim($("#name").val());
        var type = validator.trim($("#type").val());
        var brand = validator.trim($("#brand").val());
        var sprice = validator.trim($("#startprice").val());
        var buyout = validator.trim($("#buyout").val());
        var images = validator.trim($('#images').val());
        var desc = validator.trim($("#desc").val());
        var enddate = validator.trim($("#enddate").val());

        var nameEmpty = validator.isEmpty(name);
        var typeEmpty = validator.isEmpty(type);
        var brandEmpty = validator.isEmpty(brand);
        var spriceEmpty = validator.isEmpty(sprice);
        var buyoutEmpty = validator.isEmpty(buyout);
        var imagesEmpty = validator.isEmpty(images);
        var descEmpty = validator.isEmpty(desc);
        var enddateEmpty = validator.isEmpty(enddate);

        return !nameEmpty && !typeEmpty && !brandEmpty && !spriceEmpty && !buyoutEmpty && !imagesEmpty && !descEmpty && !enddateEmpty;
    }


    function isValidPrice(field) {
        var sprice = validator.trim($("#startprice").val());
        var buyout = validator.trim($("#buyout").val());
        console.log('sprice:' + sprice + ' buyout:' + buyout)
        if((!validator.isEmpty(sprice) && !validator.isEmpty(buyout)) && parseFloat(buyout) > parseFloat(sprice)){
            if(field.is($('#buyout')) || field.is($('#startprice'))){
                $('#startprice').removeClass('is-invalid');
                $('#startprice').addClass('is-valid');
                $('#buyout').removeClass('is-invalid');
                $('#buyout').addClass('is-valid');

                $('#startpriceError').removeClass('is-invalid');
                $('#startpriceError').addClass('is-valid');
                $('#buyoutError').removeClass('is-invalid');
                $('#buyoutError').addClass('is-valid');

                $('#buyoutError').text('');
            }
            return true;
        }
        else{
            if(field.is($('#buyout')) || field.is($('#startprice')) ) {
                $('#startprice').removeClass('is-valid');
                $('#startprice').addClass('is-invalid');
                $('#buyout').removeClass('is-valid');
                $('#buyout').addClass('is-invalid');

                $('#startpriceError').removeClass('is-valid');
                $('#startpriceError').addClass('is-invalid');
                $('#buyoutError').removeClass('is-valid');
                $('#buyoutError').addClass('is-invalid');

                $('#startpriceError').text('');
                $('#buyoutError').text('Buyout Price should be greater than Start Price and not empty.');
            }
            return false;
        }

    }

    function isValidDate(field, callback) {
        var enddate = new Date(validator.trim($('#enddate').val()));

        if(enddate > Date.now()) {
            if(field.is($('#enddate'))) {
                $('#enddate').removeClass('is-invalid');
                $('#enddate').addClass('is-valid');

                // $('#endDateError').removeClass('invalid-feedback');
                // $('#endDateError').addClass('valid-feedback');
                $('#enddateError').text('');
            }
            return callback(true);
        }
        else {
            if(field.is($('#enddate'))) {
                $('#enddate').removeClass('is-valid');
                $('#enddate').addClass('is-invalid');

                // $('#endDateError').removeClass('valid-feedback');
                // $('#endDateError').addClass('invalid-feedback');
                $('#enddateError').text('The new date should be greater than the current date.');
            }
            return callback(false);
        }
    }


    function validateField(field, fieldName, error){
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(empty) {
            field.removeClass('is-valid');
            field.addClass('is-invalid');

            error.removeClass('is-valid')
            error.addClass('is-invalid')
            error.text(fieldName + ' should not be empty.');
        }

        else {
            field.removeClass('is-invalid');
            field.addClass('is-valid');

            error.removeClass('is-invalid')
            error.addClass('is-valid')
            error.text('');
        }

        var filled = isFilled();
        var validPrice = isValidPrice(field);

        console.log(validPrice);

        isValidDate(field, function(validDate) {
            if(filled && validPrice && validDate){
                $("#createbtnn").prop('disabled', false);
            }
            else {
                $("#createbtnn").prop('disabled', true);
            }
        });
        
    }

    

    $('#name').keyup(function () {
    validateField($('#name'), 'name', $('#nameError'));
    });
    $('#type').click(function () {
    validateField($('#type'), 'type', $('#typeError'));
    });
    $('#brand').keyup(function () {
    validateField($('#brand'), 'brand', $('#brandError'));
    });
    $('#startprice').keyup(function () {
    validateField($('#startprice'), 'start price', $('#startpriceError'));
    });
    $('#buyout').keyup(function () {
    validateField($('#buyout'), 'buy out price', $('#buyoutError'));
    });
    $('#images').blur(function () {
    validateField($('#images'), 'image', $('#imagesError'));
    });
    $('#desc').keyup(function () {
    validateField($('#desc'), 'description', $('#descError'));
    });
    $('#enddate').blur(function () {
    validateField($('#enddate'), 'end date and time', $('#enddateError'));
    });
});