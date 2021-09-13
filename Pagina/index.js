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




var enviarmonedas = function(nombre,genero="I",edad="18"){

    if(status == true){
        console.log(nombre + '+500 monedas')
    }


    if(status == false){
        console.log(nombre + '+50 monedas')
    }

}


var generos = []
//push agrega elementos a un array
generos.push({id:"a",age:35,estado:true})
generos.push({id:"b",age:34,estado:false})
generos.push({id:"c",age:36,estado:true})

//pop elimina ultimo registro
//generos.pop()
//generos.pop()

//reverse se usa para invertir el orden de un array
//generos.reverse()


console.log(generos)

var datos = []
datos.push("a")
datos.push("b")
datos.push("c")




//separa cada elemento del array con un caracter |
//datos.join('|')

//el .length sirve para ver cuantos registros tengo
//var x = datos.length

//sirve para buscar elementos dentro de un array y me devueleve true si existe
//datos.includes("x")

// index of me permite buscar en un array y me devuelve la posicion donde lo encuentra
//datos.indexOf('a')

// Array.isArray me permite validar  si un elemento de de tipo array
//var x = Array.isArray(datos)

//fill me permite reeemplazar toda la informacion de cada elemento del array
//datos.fill("default.jpg")

//concat se utiliza para unir 2 tipos de array
//var resultado = datos.concat(datos1)

//splice se utiliza para eliminar elementos a partir de una posicion
//datos.splice(1,2)

// var x = 2
// console.log(x.toString())

// console.log(datos)
// console.log(datos.indexOf('2'))


enviarmonedas('john',"M")
enviarmonedas('juan',"F")


var a = 1
var b = 2
var c = 2
var d = 3

//if ternario
//a == b ? console.log('entro'):console.log('no entro')


// verdadero  / false
// if(a == b && c == d )
// {
// //aqui
// console.log('entro por el IF')

// }
// else
// {
//     console.log('entro por el False')
// }

var edad = 5;
var vacuna = "pfizer"




// conficional similar al IF 

// switch (true) {
 
//     case (edad >= 0 && edad <= 10):
//        vacuna = "vacuna 2"
//         break;
    
//     case  (edad >= 0 && edad <= 4):
//             vacuna = "vacuna1"
    
//             break;
//     case (edad >= 11 && edad <= 20):
//         vacuna = "vacuna 3"
//         break;

//     case 7:
//             vacuna = "vacuna 4"
//             break;

//     default:
//         vacuna = "pfizer"
//         break;
// }







































































