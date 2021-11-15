var usuariosModel = {}

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombre:String,
    apellidos:String,
    direccion:String,
    telefono:Number
});

const MyModel = mongoose.model('usuario',UserSchema)

//Create
usuariosModel.guardar = function(post,callback){

    const instancia = new MyModel

    instancia.nombre = post.nombre
    instancia.apellidos = post.apellidos
    instancia.direccion = post.direccion
    instancia.telefono = post.telefono
  
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
usuariosModel.listar = function(post,callback){
    MyModel.find({},{nombre:1,apellidos:1,_id:1,direccion:1,telefono:1},(err,registros) => {
        if(err){
            console.log(err)
            return callback(err)
        }
        else{
            return callback(registros)
        }
       
    })
}


usuariosModel.listarId = function(post,callback){
    MyModel.find({_id:post.id},{nombre:1,apellidos:1,_id:1,direccion:1,telefono:1},(err,registros) => {
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
usuariosModel.actualizar = function(post,callback){

    MyModel.findByIdAndUpdate(post.id,
    {   
        nombre:post.nombre
        ,apellidos:post.apellidos
        ,direccion:post.direccion
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
usuariosModel.eliminar = function(post, callback){

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



usuariosModel.activarusuario = function(post,callback){
    return callback({})
}


usuariosModel.crearorden = function(post,callback){
    return callback({state:'ok',info:post.body})
}



var PublicacionesSchema = new Schema({
    descripcion:String
});

const MyModelpublicaciones = mongoose.model('publicaciones',PublicacionesSchema)

usuariosModel.join = function(post, callback){

   MyModelpublicaciones.aggregate(
        [
            {
                $lookup:
                  {
                    from: "usuarios", //tabla destino     
                    localField: "usuario_id", //campo local
                    foreignField: "_id",  //campo destino
                    //let:{ident:"$descripcion"}, // se usa para capturar datos de la consulta padre
                    as: "usuarios" //alias
                //     ,pipeline:[
                //         {$match:{_id:1}},
                //         { $project: { _id: 1 }}
                //    ]                   
                  }
                      
             }
             //,{$unwind:"$usuarios"}// para que no muestre como array
             //,{$match:{usuario_id:1}}
             // ,{$match:{descripcion:{$regex:/hola/}}}
             //,{ $project: { descripcion: 1,"usuarios.saldo":1} } //items que se ven
             
        ]
    ,(error,resultado) => {
        if(error){
            console.log(error)
        }
        console.log(resultado)
        return callback(resultado)
    })
        

}


module.exports.usuarios = usuariosModel;