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



var usuarios = require(appRoot + '/api/controladores/usuariosController.js').usuarios
app.post('/activarusuario',function(request,response){
   usuarios.activarusuario(request,response)
})

app.post('/guardar',function(request,response){
    usuarios.guardar(request,response)
})

app.post('/crearorden',function(request,response){
    usuarios.crearorden(request,response)
})