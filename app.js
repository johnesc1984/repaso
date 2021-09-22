var express = require('express')
global.app = express()
global.config = require(__dirname + '/config.js').config
global.path = require('path')
global.appRoot = path.resolve(__dirname)


require('./routes/rutas.js')


//exponer nuestro aplicativo del lado del frontend
app.use('/',express.static(__dirname + '/Pagina'))
app.use('/imagenes',express.static(__dirname + '/imagenes'))


app.listen(config.puerto,function(){
    console.log('Servidor funcionando por el puerto: ' + config.puerto)
})