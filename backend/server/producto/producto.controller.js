const Producto = require('./producto.model');

/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
  Producto.get(id)
    .then((producto) => {
      req.producto = producto; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get user
 * @returns {Producto}
 */
function get(req, res) {
  return res.json(req.producto);
}

/**
 * Create new user
 * @property {string} req.body.nombre - The username of user.
 * @property {string} req.body.descripcion - The mobileNumber of user.
 * @property {Number} req.body.stock - The mobileNumber of user.
 * @property {string} req.body.precio - The mobileNumber of user.
 * @property {string} req.body.imagen - The mobileNumber of user.



 * @returns {Producto}
 */
function create(req, res, next) {
  const producto = new Producto({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    stock: req.body.stock,
    imagen: req.body.imagen,
    precio: req.body.precio
  });

  producto.save()
    .then(savedProducto => res.json(savedProducto))
    .catch(e => next(e));
}

/**
 * Update existing user
 * @property {string} req.body.nombre - The username of user.
 * @property {string} req.body.descripcion - The mobileNumber of user.
 * @property {Number} req.body.stock - The mobileNumber of user.
 * @property {string} req.body.imagen - The mobileNumber of user.

 * @returns {Producto}
 */
function update(req, res, next) {
  const producto = req.producto;
  producto.nombre = req.body.nombre;
  producto.descripcion = req.body.descripcion;
  producto.stock = req.stock;
  producto.precio = req.precio
  producto.imagen = req.imagen,
  user.save()
    .then(savedProducto => res.json(savedProducto))
    .catch(e => next(e));
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {Producto[]}
 */
function list(req, res, next) {
  console.log('aaAAA');
  const { limit = 50, skip = 0 } = req.query;
  Producto.list({ limit, skip })
    .then(productos => res.json(productos))
    .catch(e => next(e));
}

/**
 * Delete user.
 * @returns {Producto}
 */
function remove(req, res, next) {
  const producto = req.producto
  console.log(producto);
  producto.remove()
    .then(deletedProducto => res.json(deletedProducto))
    .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };
