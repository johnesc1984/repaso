

var peticion = function(url,path,data,tipopeticion,callback)
{
    
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.open(tipopeticion, ""+ url + path);
        
         
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("cache-control", "no-cache");
      
        xhr.send(data);
    
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                return callback( JSON.parse(this.responseText));
            }
        });
    
    
}




var Guardar = function(){

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var direccion = document.getElementById('direccion').value;

    console.log(nombre)
    console.log(apellido)
    console.log(direccion)

    var data = "nombre="+ nombre +"&apellidos="+ apellido +"&direccion="+ direccion +"";

    peticion('http://127.0.0.1:3000','/guardar',data,"POST",function(respuesta){
        console.log(respuesta)
    })

}


var activarusuario = function(){

        var nombre = document.getElementById('nombre').value;
   

        var post = {
            url:'http://127.0.0.1:3000',
            path:"/activarusuario",
            data:"email="+ nombre +"@gmail",
            tipopeticion:"POST"
        }

        peticion(post.url,post.path,post.data,post.tipopeticion,function(respuesta){
            console.log(respuesta)
        })


}

var activar = function(){

    var codigo = document.getElementById('codigo').value;

    var post = {
        url:'http://127.0.0.1:3000',
        path:"/activarusuario/johnescastiblanco@gmail.com/" + codigo,
        data:"",
        tipopeticion:"GET"
    }
    peticion(post.url,post.path,post.data,post.tipopeticion,function(respuesta){
        console.log(respuesta)
    })
}