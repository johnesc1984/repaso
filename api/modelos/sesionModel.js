var sesionModel = {};


const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var SesionSchema = new Schema({
    email:String,
    password:String,
    codigoverificacion:String,
    estadoactivo:Number

});

const MyModel = mongoose.model('sesion',SesionSchema)

sesionModel.registrodeusuarios = function(post,callback){

    const instancia = new MyModel

    instancia.email = post.email;
    instancia.password = post.password
    instancia.codigoverificacion = post.codigoverificacion
    instancia.estadoactivo = 0

    instancia.save((err,creado) => {
        if(err){
            console.log(err)
            return callback({state:false,info:err})
        }
        else{
            console.log(creado)
            return callback({state:true,info:creado})
        }
    })

}

sesionModel.activar = function(post,callback){

    MyModel.find({email:post.email},(err,documento) => {
        if(err){
            console.log(err)
            return callback(err)
        }
        else{
            console.log(documento)
            return callback(documento)
        }

    })

}

sesionModel.actualizarestado = function(post,callback){

    MyModel.findOneAndUpdate({email:post.email},{estadoactivo:1},(err,usuarioactivo) => {
        if(err){
            return callback(err)
        }
        else
        {
            return callback({state:true,mensaje:'activado'})
        }
    })
}


sesionModel.login = function(post,callback){

    MyModel.find({email:post.email},(err,documento) => {
        if(err){
            console.log(err)
            return callback(err)
        }
        else{
            console.log(documento)
            return callback(documento)
        }

    })

}


module.exports.sesion = sesionModel;