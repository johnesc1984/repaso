var sesionModel = require(appRoot + '/api/modelos/sesionModel.js').sesion
var sesionController = {}
var MD5 = require('MD5');


//la gente se registra
sesionController.registrodeusuarios = function(request,response){
    
    var post = {
        email:request.body.email,
        password: MD5(request.body.password + 'ENCRIPTADOXXX')
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
   
    post.codigoverificacion = numaleatorio
    sesionModel.registrodeusuarios(post,function(respuesta){
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Usuario Creado"})
        }
        else{
            response.json({state:false,mensaje:"error al crear usuario"})
        }
    })

    //usuarios.push({email:post.email,estado:0,codigoverificacion:numaleatorio,password:post.password})
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
            //response.json({status:'error'})
        }

        //response.json({state:true,mensaje:'su usuario se ha registrado correctamente, le hemos enviado un codigo de verificacion'})

    });
    //envio del email

   
}
// la gente activa la cuenta
sesionController.activar = function(request,response){
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

    sesionModel.activar(post,function(respuesta){
       
        console.log('---------------------------------->')
        console.log(respuesta)

        if(respuesta.length == 0){
            response.json({state:false,mensaje:'el correo que ingreso no es valido'})
            return false;
        }

        if(respuesta[0].codigoverificacion == post.codigo){

            sesionModel.actualizarestado(post,function(respuestaactivacion){
                console.log(respuestaactivacion)
                response.json({state:true,mensaje:'codigo correcto'})
            })
           
        }
        else{
            response.json({state:false,mensaje:'codigo INCORRECTO'})
        }

       
    })

        // var posicion = usuarios.findIndex((elemento) => { return elemento.email == post.email })   
        
        // if(posicion == -1){
        //     response.json({mensaje:'usuario no existe'})
        //     return false
        // }

        // if(usuarios[posicion].codigoverificacion == post.codigo){
           
        //     usuarios[posicion].estado = 1;
        //     response.json({mensaje:'su cuenta ha sido activada'})
        //     return false
        // }
        // else{
        //     response.json({mensaje:'codigo invalido'})
        //     return false
        // }

}
//la gente inicia sesion
sesionController.login = function(request,response){
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

    sesionModel.login(post,function(respuesta){

        if(respuesta.length == 0){
            response.json({state:false,mensaje:'email no valido'})
            return false;
        }

        if(respuesta[0].estadoactivo == 0){
            response.json({state:false,mensaje:'Su cuenta no esta activa dirijase a su email'})
            return false
        }

        console.log('------------------------------------>')
        console.log(respuesta[0].password)
        console.log(MD5(post.password + 'ENCRIPTADOXXX'))

        if(respuesta[0].password == MD5(post.password + 'ENCRIPTADOXXX')){
            response.json({state:true,mensaje:'Bienvenido'})
            return false
        }
        else{
            response.json({state:false,mensaje:'La clave no es valida'})
            return false
        }
        
    })


        // var posicion = usuarios.findIndex((elemento) => { return elemento.email == post.email })   
        
        // if(posicion == -1){
        //     response.json({mensaje:'usuario no existe'})
        //     return false
        // }

        // if(usuarios[posicion].estado == 0){
        //     response.json({mensaje:'usuario inactivo verifique su correo'})
        //     return false
        // }

        // if(usuarios[posicion].estado == 1 && usuarios[posicion].password == post.password ){
        //     response.json({mensaje:'Bienvenido'})
        //     return false
        // }
        // else{
        //     response.json({mensaje:'password incorrecto'})
        //     return false
        // }
        

        

}




module.exports.sesion = sesionController;