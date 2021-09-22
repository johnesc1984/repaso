var matematicasController = {}

matematicasController.restar = function(request,response){
    response.send('<h1>esta es una pagina para hacer restas</h1>')
}

matematicasController.sumar = function(request,response){
    var dato1 = parseInt(request.params.a);
    var dato2 = parseInt(request.params.b);
    response.send('<div>' + (dato1 + dato2) + '</div>')
}

module.exports.matematicas = matematicasController