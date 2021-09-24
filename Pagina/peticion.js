var Guardar = function(){

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var direccion = document.getElementById('direccion').value;

    console.log(nombre)
    console.log(apellido)
    console.log(direccion)

    var data = "nombre="+ nombre +"&apellidos="+ apellido +"&direccion="+ direccion +"";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("POST", "http://127.0.0.1:3000/guardar");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
  
    xhr.send(data);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log( JSON.parse(this.responseText));
        }
    });

}