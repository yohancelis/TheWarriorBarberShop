const { Router } = require('express') //Desestructuración. Extraer un atributo de un objeto.

const route = Router()

//Importar métodos del controlador
const { clienteGet, clientePost, clientePut, clienteDelete } = require('../controllers/client')

route.get('/', clienteGet)

route.post('/', clientePost)

route.put('/', clientePut)

route.delete('/', clienteDelete)


module.exports = route