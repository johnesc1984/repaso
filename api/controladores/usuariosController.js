var usuariosModel = require(appRoot + '/api/modelos/usuariosModel.js').usuarios

var usuariosController = {}



usuariosController.activarusuario = function(request,response){
    var email = request.body.email
    console.log(email)
    response.json({state:'ok'})
    
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

var usuarios = [];

usuariosController.registrodeusuarios = function(request,response){
    var post = {
        email:request.body.email,
        password:request.body.password
    }

    if(post.email == "" || post.email == undefined || post.email == null  ){
        response.json({state:false,mesaje:'el campo email es obligatorio'})
        return false;
    }
    if(post.password == "" || post.password == undefined || post.password == null  ){
        response.json({state:false,mesaje:'el campo password es obligatorio'})
        return false;
    }

    var numaleatorio = Math.floor(Math.random() * 9999) + 1000;
    usuarios.push({email:post.email,estado:0,codigoverificacion:numaleatorio,password:post.password})

    //envio de email
    


    const nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'pruebasprogramacion123@gmail.com',
            pass: 'bcxgiyjpmycwival'
        }
    });
    //http://127.0.0.1:3000/activarusuario/johnescastiblanco@gmail.com/8585
    let mailOptions = {
        from: 'pruebasprogramacion123@gmail.com',
        to: post.email,
        subject: 'verifica tu cuenta codigo: ' + numaleatorio,
          html: "<b style='color:blue'><a href='http://127.0.0.1:3000/activarusuario/"+ post.email +"/"+ numaleatorio +"'>click aqui para activar</a> </b>", // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            
            return console.log(error.message);
            response.json({status:'error'})
        }

        response.json({state:true,mensaje:'su usuario se ha registrado correctamente, le hemos enviado un codigo de verificacion'})

    });
    //envio del email

   
}

usuariosController.login = function(request,response){
    var post = {
        email:request.body.email,
        password:request.body.password
    }

    if(post.email == "" || post.email == undefined || post.email == null  ){
        response.json({state:false,mesaje:'el campo email es obligatorio'})
        return false;
    }

    if(post.password == "" || post.password == undefined || post.password == null  ){
        response.json({state:false,mesaje:'el campo password es obligatorio'})
        return false;
    }

        var posicion = usuarios.findIndex((elemento) => { return elemento.email == post.email })   
        
        if(posicion == -1){
            response.json({mensaje:'usuario no existe'})
            return false
        }

        if(usuarios[posicion].estado == 0){
            response.json({mensaje:'usuario inactivo verifique su correo'})
            return false
        }

        if(usuarios[posicion].estado == 1 && usuarios[posicion].password == post.password ){
            response.json({mensaje:'Bienvenido'})
            return false
        }
        else{
            response.json({mensaje:'password incorrecto'})
            return false
        }
        

        

}

usuariosController.activar = function(request,response){
    var post = {
        email:request.params.email,
        codigo:request.params.codigo
    }

    if(post.email == "" || post.email == undefined || post.email == null  ){
        response.json({state:false,mesaje:'el campo email es obligatorio'})
        return false;
    }

    if(post.codigo == "" || post.codigo == undefined || post.codigo == null  ){
        response.json({state:false,mesaje:'el campo codigo es obligatorio'})
        return false;
    }

        var posicion = usuarios.findIndex((elemento) => { return elemento.email == post.email })   
        
        if(posicion == -1){
            response.json({mensaje:'usuario no existe'})
            return false
        }

        if(usuarios[posicion].codigoverificacion == post.codigo){
           
            usuarios[posicion].estado = 1;
            response.json({mensaje:'su cuenta ha sido activada'})
            return false
        }
        else{
            response.json({mensaje:'codigo invalido'})
            return false
        }

      
        

        

}



module.exports.usuarios = usuariosController