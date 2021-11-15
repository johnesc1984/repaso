var productosModel = require(appRoot + '/api/modelos/productosModel.js').productos

var productosController = {}

//crear
productosController.guardar = function(request,response){
    var post = {
        nombre:request.body.nombre,
    }
  
    if(post.nombre == "" || post.nombre == undefined || post.nombre == null  ){
        response.json({state:false,mesaje:'el campo nombre es obligatorio'})
        return false;
    }


    productosModel.guardar(post,function(respuesta){
        console.log('------------------------------------->response')
        console.log(respuesta)
        response.json(respuesta)
    })

}
//actualizar
productosController.actualizar = function(request,response){
    var post = {
        nombre:request.body.nombre,
        id:request.body.id
    }
    console.log('------------------------------------->request')
    console.log(post)


    if(post.id == "" || post.id == undefined || post.id == null  ){
        response.json({state:false,mesaje:'el campo id es obligatorio'})
        return false;
    }

    if(post.nombre == "" || post.nombre == undefined || post.nombre == null  ){
        response.json({state:false,mesaje:'el campo nombre es obligatorio'})
        return false;
    }


    productosModel.actualizar(post,function(respuesta){
        console.log('------------------------------------->response')
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({mensaje:'Producto Modificado correctamente'})
        }
        else{
            response.json({mensaje:'se presento un error al modificar'})
        }    
    })


}
//listar productos
productosController.listar = function(request,response){

    productosModel.listar(null,function(respuesta){
        response.json(respuesta)
    })
}

//listar productos
productosController.listarId = function(request,response){

    var post = {
        id:request.body.id
    }

    if(post.id == null || post.id == undefined || post.id == ''){
        response.json({state:false,mensaje:'el campo id es un campo obligatorio'})
        return false;
    }


    productosModel.listarId(post,function(respuesta){
        response.json(respuesta)
    })
}


//eliminar productos
productosController.eliminar = function(request,response){
    var post = {
        id:request.body.id
    }

    if(post.id == null || post.id == undefined || post.id == ''){
        response.json({state:false,mensaje:'el campo id es un campo obligatorio'})
        return false;
    }

    productosModel.eliminar(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Producto Eliminado'})
        }
        else{
            response.json({state:false,mensaje:'Error al eliminar'})
        }
    })

}




module.exports.productos = productosController