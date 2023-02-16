// RUTAS : puntos de entrada de la aplicacion

const { Router } = require("express");
const { check } = require("express-validator");
const { findAllUsers, findUser, createUser, updateUser, deleteUser } = require("../controllers/user.controller");
const { validIfExistUser, validIfExistUserEmail } = require("../middlewares/user.middlewares");
const { validateFields } = require("../middlewares/validatefield.middlewares");
const router = Router();


router.get('/', findAllUsers);


router.get('/:id', validIfExistUser, findUser);


router.post('/', [
    // isEmpty: Valida que no este vacio
    check('name', 'The name must be mandatory').not().isEmpty(),
    check('email', 'The email must be mandatory').not().isEmpty(),
    // isEmail: Valida que este en formato de correo electronico
    check('email', 'The email must be a correct format').isEmail(),
    check('password', 'The password must be mandatory').not().isEmpty(),

    validateFields,
    validIfExistUserEmail
], createUser);


router.patch('/:id', [
    // isEmpty: Valida que no este vacio
    check('name', 'The name must be mandatory').not().isEmpty(),
    check('email', 'The email must be mandatory').not().isEmpty(),
    // isEmail: Valida que este en formato de correo electronico
    check('email', 'The email must be a correct format').isEmail(),

    validateFields,
    validIfExistUser
], updateUser);


router.delete('/:id', validIfExistUser, deleteUser);


module.exports = {
    userRouter: router,
}