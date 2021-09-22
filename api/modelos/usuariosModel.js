var usuariosModel = {}

var datos = []

usuariosModel.guardar = function(post,callback){

    datos.push(
    {
        nombre:post.nombre
        ,apellidos:post.apellidos
        ,direccion:post.direccion
        ,telefono:post.telefono
    })

    return callback({state:true,info:datos})
}

usuariosModel.activarusuario = function(post,callback){

    
    return callback({})
}


usuariosModel.crearorden = function(post,callback){

  
    return callback({state:'ok',info:post.body})
}



module.exports.usuarios = usuariosModel;