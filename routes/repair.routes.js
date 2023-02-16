// RUTAS : puntos de entrada de la aplicacion

const { Router } = require("express");
const { findAllRepairs, findRepair, createRepair, deleteRepair, updateRepair } = require("../controllers/repair.controller");
const { validIfExistRepair } = require("../middlewares/repair.middlewares");
const { validateFields } = require("../middlewares/validatefield.middlewares");
const router = Router();


router.get('/', findAllRepairs);

router.get('/:id', validIfExistRepair, findRepair);

router.post('/', [
    // isEmpty: Valida que no este vacio
    check('date', 'The date must be mandatory').not().isEmpty(),
    check('motorsNumber', 'The motorsNumber must be mandatory').not().isEmpty(),
    check('description', 'The description must be mandatory').not().isEmpty(),

    validateFields,
    validIfExistRepair,
], createRepair);

router.patch('/:id', validIfExistRepair, updateRepair);

router.delete('/:id', validIfExistRepair, deleteRepair);


module.exports = {
    repairRouter: router,
}