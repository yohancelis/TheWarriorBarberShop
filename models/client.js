const { Schema, model } = require('mongoose')

//Esquema de la colección usuario
const ClienteSchema = Schema({
    //Atributos
    nombre: {
        //Tipo cadena
        type: String,
        //Valor único
        unique: true,
        //Requerido
        required: [true, 'El nombre es obligatorio!']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria!'],
        //Longitud mínima en caracteres
        minlength: [8, 'Debe tener mínimo 8 caracteres...'],
        //Longitud máxima en caracteres
        maxlength: [15, 'Debe tener máximo 15 caracteres']
    },
    rol: {
        type: String,
        required: true,
        enumeracion: ['Admin', 'Barbero', 'Cliente']
    },
    estado: {
        type: Boolean,
        //Valor por defecto es 'true'
        default: true,
        required: [true, 'El estado es obligatorio']
    }
})

//Exportar la funcipon UsuarioSchema
module.exports = model('Cliente', ClienteSchema)