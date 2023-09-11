//app.js -> 

const cookieParser = require('cookie-parser') //Guardar datos(Encriptar) Ej: los datos de un login
const express = require('express') //Permite ejecutar(Servidor de node), framework de node
const cors = require('cors') //Implementa seguridad
const bodyParser = require('body-parser')//Recibir datos de un formulario html
const { dbConnection } = require('../database/config') //Conexión

class server {
    constructor() {
        this.app = express() //Utiliza el express
        this.port = process.env.PORT //Captura la variable del puerto para la conección
        this.clientePath = '/api/cliente' //Ruta para la api usuario(Ruta pública)
        this.middlewares()
        this.conectarDB() //Conectar a la base de datos
        this.routes()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(cookieParser()),
        this.app.use(express.static(__dirname + "/public"))
        this.app.use(cors())
        this.app.use(bodyParser.json)
    }

    routes() {
        this.app.use(this.clientePath, require('../routes/client'))
    }

    //Siempre que hay asincónico hay un await
    async conectarDB() {
        await dbConnection() //Esperar la respuesta del servidor
    }
}

module.exports = server