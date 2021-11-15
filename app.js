var express = require('express')
const mongoose = require('mongoose');
const { config } = require('./config.js');


global.app = express()
global.config = require(__dirname + '/config.js').config
global.path = require('path')
global.appRoot = path.resolve(__dirname)




app.all('*',function(req, res, next){

    var whitelist = req.headers.origin;
  
    res.header('Access-Control-Allow-Origin', whitelist);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');  
    res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.header("Access-Control-Allow-Credentials", "true");
    //res.header('Set-Cookie: cross-site-cookie=name; SameSite=None; Secure');
  
    next();
      
});






mongoose.connect('mongodb://127.0.0.1:27017/' + config.nombrebd, {useNewUrlParser:true,useUnifiedTopology:true},(error,response) => {
    if(error){
        console.log(error)
    }
    else{
    console.log('conexion a mongo correcta')
    }
})


require('./routes/rutas.js')


//exponer nuestro aplicativo del lado del frontend
app.use('/',express.static(__dirname + '/Pagina'))
app.use('/imagenes',express.static(__dirname + '/imagenes'))



app.listen(config.puerto,function(){
    console.log('Servidor funcionando por el puerto: ' + config.puerto)
})

