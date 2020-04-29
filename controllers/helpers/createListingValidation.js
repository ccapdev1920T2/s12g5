
const { check } = require('express-validator');


const validation = {

    createListingValidation: function () {
        var validation = [

            check('name', 'Product name should not be empty.').notEmpty(),
            check('type', 'Last name should not be empty.').notEmpty(),
            check('brand', 'Product brand should not be emptys').notEmpty(),
            check('startprice', 'Starting price should not be empty.').notEmpty(),
            check('buyout', 'Buy out price should not be empty.').notEmpty(),
            check('desc', 'Description should not be empty.').notEmpty(),
            check('startprice', 'Last name should not be empty.').notEmpty(),
            check('images', 'Listing should include an image.').notEmpty(),
            check('enddate', 'End date should be defined.').notEmpty()

        ];

        return validation;
    }
}

/*
    exports the object `validation` (defined above)
    when another script exports from this file
*/
module.exports = validation;
