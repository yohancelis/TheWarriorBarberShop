const Usuario = require('../models/usuario')
const bcrypt = require ('bcrypt') //encriptar


const login = async(req, res) => {
    const {nombre, password} = req.body

    const usuarios = await Usuario.findOne({nombre})

    try {
        if (!usuarios){
            return res.status(400).json({
                msg: 'Usuario no encontrado'
            })
        } 
        if (usuarios.estado == false){
            return res.status(400).json({
                msg: 'Usuario esta inactivo'
            })
        } 
        resultado = await comparePassword(password, usuarios.password) 

        if (resultado==true) {
            return res.status(200).json({
                msg: 'bienvenido'
        }) 
    } else {
        return res.status(400).json({
            msg: 'contraseña invalidad'
        })
    } 
    } catch (error){
        return res.status(400).json({
            msg: 'querido usuario contactate con el administrador'
        })
    }
}

module.exports = {
    login,
    //inAuthenticated
}