const {response} = require('express')  // (express)para desarrollar aplicaciones o para trabajar en node
const bcrypt = require ('bcrypt') //encriptar


//Importación de los modelos
const Cliente = require('../models/client')

//Método GET de la API
const clienteGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración

    //Consultar todos los usuarios
    const clientes = await Cliente.find()

    res.json({  //Respuesta en JSON
        clientes
    })   
}

//Método POST de la api
const clientePost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.query //Captura de atributos
    try {
        const cliente = new Cliente(body) //Instanciando el objeto   
        const salt = 10 //numero de vueltas
        usuario.password = bcrypt.hashSync(body.password, salt)
        await cliente.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

//Modifcación
const clientePut = async(req, res = response) => {

    const {usuario,nombre, apellido, correo, telefono} = req.query
    let mensaje = 'Modificación exitosa'
    try{
         await Cliente.findOneAndUpdate({usuario: usuario}, 
            {nombre:nombre, apellido:apellido,correo:correo, telefono:telefono,})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}


//Modifcación
const clienteDelete = async(req, res = response) => {

    const {_id} = req.query
    let mensaje = ''
    try{
         const cliente = await Cliente.deleteOne ({_id:_id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminacion.'
    }

    res.json({
        msg: mensaje
    })
}


module.exports = {  
    clienteGet,
    clientePost,
    clientePut,
    clienteDelete
}