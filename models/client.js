const { Schema, model } = require('mongoose')

//Esquema de la colección usuario
const ClienteSchema = Schema({
    //Atributos
    usuario: {
        //Tipo cadena
        type: String,
        //Valor único
        unique: true,
        //Requerido
        required: [true, 'El nombre es obligatorio!']
    },
    nombre: {
        //Tipo cadena
        type: String,
        //Valor único
        unique: true,
        //Requerido
        required: [true, 'El apellido es obligatorio!']
    },
    apellido: {
        type: String,
        required: [true, 'La contraseña es obligatoria!'],
        //Longitud mínima en caracteres
        minlength: [8, 'Debe tener mínimo 8 caracteres...'],
        //Longitud máxima en caracteres
        maxlength: [15, 'Debe tener máximo 15 caracteres']
    },
    correo: {
        //Tipo cadena
        type: String,
        //Valor único
        unique: true,
        //Requerido
        required: [true, 'El correo es obligatorio!']
    },
    telefono: {
        //Tipo cadena
        type: String,
        //Valor único
        unique: true,
        //Requerido
        required: [true, 'El telefono es obligatorio!']
    },

})

//Exportar la funcipon UsuarioSchema
module.exports = model('Cliente', ClienteSchema)