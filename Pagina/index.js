//variables

var misproductos = [
{id:1,cantidad: '100', nombre: 'papitas', valor: 1000},
{id:2,cantidad: '50', nombre: 'jugo', valor: 1000},
{id:3,cantidad: '50', nombre: 'chicles', valor: 1000},
]
var carrito = [];


//creamos los productos
var GuardarProducto = function () {
    var nombre = document.getElementById('nombre').value
    var cantidad = document.getElementById('cantidad').value
    misproductos.push({cantidad:cantidad,nombre:nombre,valor:1000})
    console.log(misproductos)
}
//mustra las unidades existentes en el carrito
var analizarcarrito = function(){

    console.log(localStorage.getItem('carrito'))
    if(localStorage.getItem('carrito') != null){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        console.log(carrito)
        document.getElementById('micarrito').innerHTML = carrito.length
    }
    
}
//metodo para agregar items
//recibe un id que es el id del producto
var agregarcarrito = function (id) {
        console.log(id)  
        // carrito.push({id:id}) 
   
       if(carrito.length == 0){
           carrito.push({id:id,cantidad:1})
           console.log(carrito)
       }
       else{
            
           var posicion = carrito.findIndex((elemento) => elemento.id == id)
   
           if(posicion == -1 ){
               carrito.push({id:id,cantidad:1})
           }
           else
           {
               carrito[posicion].cantidad = carrito[posicion].cantidad + 1
           }
   
           console.log(carrito)
       }
   
       localStorage.setItem('carrito',JSON.stringify(carrito))
       analizarcarrito()
   
}
//muestra los productos disponibles para agregar al carrito   
var mostrarmisproductos = function () {
       for (const iterator of misproductos) {
          
           var contenido = 
           '<div class="miitem">'+
           '<img src="/imagenes/img.jpg" class="logoproducto">'+
           '<div class="btnagregar" onclick="agregarcarrito('+ iterator.id +')" >Agregar</div>'+
           '</div>'
   
           document.getElementById('zonadeactualizacion').innerHTML += contenido
   
       }
   
}




analizarcarrito()
mostrarmisproductos()




