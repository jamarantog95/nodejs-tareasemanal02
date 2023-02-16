
const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

// OBTENER LA LISTA DE LOS USUARIOS EN LA BASE DE DATOS
exports.findAllUsers = catchAsync(async (req, res) => {

    // BUSCAMOS TODOS LOS USUARIOS CON STATUS AVAILABLE
    const users = await User.findAll({
        where: {
            status: "available",
        }
    });

    // RESPUESTA DEL SERVIDOR
    res.status(200).json({
        status: 'success',
        message: 'The users has been show',
        //Enviamos todos los usuarios
        users,

    });

})


// OBTENER UN SOLO USUARIO DADO UN ID
exports.findUser = catchAsync(async (req, res) => {

    // OBTENEMOS ID DE LA REQ PARAMS
    const { user } = req;

    // RESPUESTA DEL SERVIDOR
    res.status(200).json({
        status: 'success',
        message: 'The product was found successfully.',
        //ENVIAMOS EL USUARIO A CONSULTAR
        user
    });

})


// ACTUALIZAR LOS DATOS DE UN USUARIO DADO UN ID, SOLO PUEDE ACTUALIZAR SU NAME Y EMAIL
exports.updateUser = catchAsync(async (req, res) => {

    // OBTENEMOS ID DE LA REQ PARAMS
    const { user } = req;

    // OBTENER INFORMACION DEL REQ BODY
    const { name, email } = req.body;

    // ACTUALIZAMOS EL USUARIO ENCONTRADO
    const updateUser = await user.update({
        name,
        email,
    });

    // RESPUESTA DEL SERVIDOR
    res.status(200).json({
        status: 'success',
        message: 'The user has been update successfully',

        updateUser,

    });

})


// DESHABILITAR LA CUENTA DE UN USUARIO
exports.deleteUser = catchAsync(async (req, res) => {

    // OBTENEMOS ID DE LA REQ PARAMS
    const { user } = req;

    // ACTUALIZAMOS EL USUARIO ENCONTRADO
    await user.update({
        status: "not available"
    });

    // RESPUESTA DEL SERVIDOR
    res.status(200).json({
        status: 'success',
        message: 'The user has been disabled',
    });
})

