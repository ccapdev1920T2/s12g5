
const { check } = require('express-validator');


const validation = {

    signupValidation: function () {
        var validation = [

            check('fname', 'First name should not be empty.').notEmpty(),

            check('lname', 'Last name should not be empty.').notEmpty(),

            check('idnum', 'ID number should contain 8 digits.')
            .isLength({min: 8, max: 8}),

            check('password', 'Password should not be empty.').notEmpty(),

            check('confirmpassword', 'Confirm password should not be empty.').notEmpty(),
            
            check('email', 'Email should not be empty.').notEmpty(),

            check('username', 'Username should not be empty.').notEmpty(),

            check('bday', 'Birthday should not be empty.').notEmpty(),

            check('college', 'College should not be empty.').notEmpty(),
    
        ];

        return validation;
    }
}

/*
    exports the object `validation` (defined above)
    when another script exports from this file
*/
module.exports = validation;
