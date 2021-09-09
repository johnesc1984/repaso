var valor = ""
var minumero = 232
var booestado = true

var persona = {
    nombre:"john",
    apellido:"Castiblanco",
    edad:35,
    status:true,
    estudios:[{
       universidad:""
    }]
}

var misitems = ["john","juan","Pedro"]


var Pedido = {
    cliente:"john castiblanco",
    items:[
        {codigo:"0001",nombre:"papitas",cantidad:2},
        {codigo:"0002",nombre:"gaseosa",cantidad:1}
    ]
}


var sumar = function(a,b,c){
    console.log(a)
    console.log(b)
    return (a+b) 
}




var enviarmonedas = function(nombre,status=true){

    if(status == true){
        console.log(nombre + '+500 monedas')
    }


    if(status == false){
        console.log(nombre + '+50 monedas')
    }


}


enviarmonedas('john')
enviarmonedas('juan',false)


































































