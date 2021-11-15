var usuariosModel = require(appRoot + '/api/modelos/usuariosModel.js').usuarios

var usuariosController = {}

//crear
usuariosController.guardar = function(request,response){
    var persona = {
        nombre:request.body.nombre,
        apellidos:request.body.apellidos,
        direccion:request.body.direccion,
        telefono:request.body.telefono
    }
    console.log('------------------------------------->request')
    console.log(persona)

    if(persona.nombre == "" || persona.nombre == undefined || persona.nombre == null  ){
        response.json({state:false,mesaje:'el campo nombre es obligatorio'})
        return false;
    }


    if(persona.apellidos == "" || persona.apellidos == undefined || persona.apellidos == null  ){
        response.json({state:false,mesaje:'el campo apellidos es obligatorio'})
        return false;
    }

    if(persona.direccion == "" || persona.direccion == undefined || persona.direccion == null  ){
        response.json({state:false,mesaje:'el campo direccion es obligatorio'})
        return false;
    }

    usuariosModel.guardar(persona,function(respuesta){
        console.log('------------------------------------->response')
        console.log(respuesta)
        response.json(respuesta)
    })


}
//actualizar
usuariosController.actualizar = function(request,response){
    var persona = {
        nombre:request.body.nombre,
        apellidos:request.body.apellidos,
        direccion:request.body.direccion,
        telefono:request.body.telefono,
        id:request.body.id
    }
    console.log('------------------------------------->request')
    console.log(persona)


    if(persona.id == "" || persona.id == undefined || persona.id == null  ){
        response.json({state:false,mesaje:'el campo id es obligatorio'})
        return false;
    }

    if(persona.nombre == "" || persona.nombre == undefined || persona.nombre == null  ){
        response.json({state:false,mesaje:'el campo nombre es obligatorio'})
        return false;
    }


    if(persona.apellidos == "" || persona.apellidos == undefined || persona.apellidos == null  ){
        response.json({state:false,mesaje:'el campo apellidos es obligatorio'})
        return false;
    }

    if(persona.direccion == "" || persona.direccion == undefined || persona.direccion == null  ){
        response.json({state:false,mesaje:'el campo direccion es obligatorio'})
        return false;
    }

    usuariosModel.actualizar(persona,function(respuesta){
        console.log('------------------------------------->response')
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({mensaje:'Usuario Modificado correctamente'})
        }
        else{
            response.json({mensaje:'se presento un error al modificar'})
        }    
    })


}
//listar usuarios
usuariosController.listar = function(request,response){

    usuariosModel.listar(null,function(respuesta){
        response.json(respuesta)
    })
}

//listar usuarios
usuariosController.listarId = function(request,response){

    var post = {
        id:request.body.id
    }

    if(post.id == null || post.id == undefined || post.id == ''){
        response.json({state:false,mensaje:'el campo id es un campo obligatorio'})
        return false;
    }


    usuariosModel.listarId(post,function(respuesta){
        response.json(respuesta)
    })
}


//eliminar usuarios
usuariosController.eliminar = function(request,response){
    var post = {
        id:request.body.id
    }

    if(post.id == null || post.id == undefined || post.id == ''){
        response.json({state:false,mensaje:'el campo id es un campo obligatorio'})
        return false;
    }

    usuariosModel.eliminar(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true,mensaje:'Usuario Eliminado'})
        }
        else{
            response.json({state:false,mensaje:'Error al eliminar'})
        }
    })


}






usuariosController.crearorden = function(request,response){
    
   var items = request.body;
   
   var conerrores = 0;
   var mensajes = [];

   for (let index = 0; index < items.length; index++) {
     
    console.log('--------------------------->revisando')
      console.log(items[index])
   
   
    if( items[index].cantidad <= 0 ){
        conerrores = conerrores + 1
        mensajes.push({error:'la cantidad del item ' + (index +1) + 'no puede tener tener el valor ' + items[index].cantidad})
       
    }

    if( items[index].id <= 0 ){
        conerrores = conerrores + 1
        mensajes.push({error:'el id del item ' +  (index +1) + 'no puede tener tener el valor ' + items[index].id})
        
    }

    if(index == items.length - 1){
        if(conerrores > 0){
            response.json({mensaje:'los items tienen errores',listadeerrores:mensajes})
        }else{
            response.json({state:'ok'})
        }
    }


   }
   

//    usuariosModel.crearorden(request,function(respuesta){
//         response.json(respuesta)
//    })
}



//como descontar tiempo de un array de datos
var productos = [];

usuariosController.start = function(request,response){

     productos = [{
        nombre:'pantalon',
        estado:1,
        enpromocion:1,
        segundos:50
    },
    {
        nombre:'medias',
        estado:1,
        enpromocion:1,
        segundos:10
    }]


    setInterval(function(){
        console.log('arrancando')
        for (let index = 0; index < productos.length; index++) {
           
            if(productos[index].segundos != 0){
                productos[index].segundos = productos[index].segundos - 1
            }
            
            if(productos[index].segundos <= 0){
                productos[index].enpromocion = 0
                
            }
            console.log(productos)
            console.log('------------------------------------>')   
        }
       
    },1000)
    

    response.json({state:'ok'})
    
   

}


//listar usuarios
usuariosController.join = function(request,response){

    usuariosModel.join(null,function(respuesta){
        response.json(respuesta)
    })
}


module.exports.usuarios = usuariosController