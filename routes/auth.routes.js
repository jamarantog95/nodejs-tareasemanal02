
const { Router } = require("express");
const { check } = require("express-validator");
const { createUser } = require("../controllers/auth.controller");

const { validIfExistUserEmail } = require("../middlewares/user.middlewares");
const { validateFields } = require("../middlewares/validatefield.middlewares");
const router = Router();



router.post('/signup', [
    // isEmpty: Valida que no este vacio
    check('name', 'The name must be mandatory').not().isEmpty(),
    check('email', 'The email must be mandatory').not().isEmpty(),
    // isEmail: Valida que este en formato de correo electronico
    check('email', 'The email must be a correct format').isEmail(),
    check('password', 'The password must be mandatory').not().isEmpty(),

    validateFields,
    validIfExistUserEmail
], createUser);


module.exports = {
    authRouter: router,
};