const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const producoCtrl = require('./producto.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get(producoCtrl.list)

  /** POST /api/users - Create new user */
  .post(validate(paramValidation.createProducto), producoCtrl.create);

router.route('/:productoId')
  /** GET /api/users/:userId - Get user */
  .get(producoCtrl.get)

  /** PUT /api/users/:userId - Update user */
  .put(validate(paramValidation.updateUser), producoCtrl.update)

  /** DELETE /api/users/:userId - Delete user */
  .delete(producoCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('productoId', producoCtrl.load);

module.exports = router;
