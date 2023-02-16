const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");

// CREAR UN NUEVO USUARIO, SE DEBE PROPORCIONAR POR EL REQ.BODY (NAME, EMAIL, PASSWORD, ROLE), EL ROLE (ROL) PUEDE SER CLIENT O EMPLOYEE
exports.createUser = catchAsync(async (req, res) => {

    // OBTENER INFORMACION  DEL REQ BODY
    const { name, email, password, role = 'user' } = req.body;

    // CREAR UN NUEVO USUARIO
    const newUser = await User.create({
        name: name.toLowerCase(),
        email: email.toLowerCase(),
        password,
        role,
    });

    // RESPUESTA DEL SERVIDOR
    res.status(200).json({
        status: 'success',
        message: 'User created successfully.',

        newUser,

    });

})
