var express = require('express')
var app = express()
const port = 3000;


app.get('/',function(request,response){
    response.send('<h1>hola mundo</h1>')
})

app.get('/home',function(request,response){
    response.send('<h1>hola estas en el home</h1>')
})

app.listen(port,function(){
    console.log('Servidor funcionando por el puerto: ' + port)
})