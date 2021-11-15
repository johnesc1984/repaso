var productosModel = {}

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombre:String
});

const MyModel = mongoose.model('productos',UserSchema)

//Create
productosModel.guardar = function(post,callback){

    const instancia = new MyModel

    instancia.nombre = post.nombre
    
  
    instancia.save((error,userCreate) => {
        if(error){
            console.log(error)
            return callback({state:false,info:error})
        }
        else{
            console.log(userCreate)
            return callback({state:true,info:userCreate})
        }
    })

    
}
//Read
productosModel.listar = function(post,callback){
    MyModel.find({},{nombre:1,_id:1},(err,registros) => {
        if(err){
            console.log(err)
            return callback(err)
        }
        else{
            return callback(registros)
        }
       
    })
}


productosModel.listarId = function(post,callback){
    MyModel.find({_id:post.id},{nombre:1,_id:1},(err,registros) => {
        if(err){
            console.log(err)
            return callback(err)
        }
        else{
            return callback(registros)
        }
       
    })
}

//Update
productosModel.actualizar = function(post,callback){

    MyModel.findByIdAndUpdate(post.id,
    {   
        nombre:post.nombre
    },(error,usuariomodificado) => {
        
        if(error){
            console.log(error)
            return callback(error)
            return callback({state:false,info:error})
        }
        else{
            console.log(usuariomodificado)
            return callback({state:true,info:usuariomodificado})
        }
    })   

}
//Delete
productosModel.eliminar = function(post, callback){

    MyModel.findByIdAndDelete(post.id,(error,eliminado) => {
            
            if(error){
                console.log(error)
                return callback(error)
                return callback({state:false,info:error})
            }
            else{
                console.log(eliminado)
                return callback({state:true,info:eliminado})
            }
        })   

}




module.exports.productos = productosModel;