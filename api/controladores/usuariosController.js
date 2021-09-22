var usuariosModel = require(appRoot + '/api/modelos/usuariosModel.js').usuarios

var usuariosController = {}



usuariosController.activarusuario = function(request,response){
    var email = request.body.email
    console.log(email)
    
}

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



module.exports.usuarios = usuariosController