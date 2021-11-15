var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


var matematicas = require(appRoot + '/api/controladores/matematicasController.js').matematicas


app.get('/restar',function(request,response){
    matematicas.restar(request,response)
})

app.get('/sumar/:a/:b',function(request,response){
    matematicas.sumar(request,response)
})

app.post('/activarusuario',function(request,response){
   usuarios.activarusuario(request,response)
})




var usuarios = require(appRoot + '/api/controladores/usuariosController.js').usuarios

app.post('/guardar',function(request,response){
    usuarios.guardar(request,response)
})

app.post('/actualizar',function(request,response){
    usuarios.actualizar(request,response)
})

app.post('/listar',function(request,response){
    usuarios.listar(request,response)
})

app.post('/listarId',function(request,response){
    usuarios.listarId(request,response)
})

app.post('/eliminar',function(request,response){
    usuarios.eliminar(request,response)
})

app.post('/join',function(request,response){
    usuarios.join(request,response)
})



var productos = require(appRoot + '/api/controladores/productosController.js').productos

app.post('/Productos/guardar',function(request,response){
    productos.guardar(request,response)
})

app.post('/Productos/actualizar',function(request,response){
    productos.actualizar(request,response)
})

app.post('/Productos/listar',function(request,response){
    productos.listar(request,response)
})

app.post('/Productos/listarId',function(request,response){
    productos.listarId(request,response)
})

app.post('/Productos/eliminar',function(request,response){
    productos.eliminar(request,response)
})




app.post('/crearorden',function(request,response){
    usuarios.crearorden(request,response)
})


var sesion = require(appRoot + '/api/controladores/sesionController.js').sesion

app.post('/registrodeusuarios',function(request,response){
    sesion.registrodeusuarios(request,response)
})

app.post('/login',function(request,response){
    sesion.login(request,response)
})

app.get('/activarusuario/:email/:codigo',function(request,response){
    sesion.activar(request,response)
})




app.get('/start',function(request,response){
    usuarios.start(request,response)
})
