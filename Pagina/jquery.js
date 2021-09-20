$(document).ready(function(){

    console.log($(".btn"))

    $(".btn").mouseenter(function(){
        $("#foto").hide();
       //window.open('http://stackoverflow.com/', '_blank').focus();

    });

    $(".btn").mouseleave(function(){
        $("#foto").show();
      
       //window.open('http://stackoverflow.com/', '_blank').focus();;
    });

    var i = 0;
    var b = 0
    $("#teclado").keypress(function(){
        $("span").text(i += 1);
        $("#contador").text(b = b  + 1 )
        
    })




    $(".btn2").dblclick(function(){
        $("#foto").show();
    });


    $("p").click(function(){
        alert('hola mundo')
    });

    var horizontal = 10;
    var vertical = 10
    $("p").css("position", "absolute");
    
    $("p").css("left", horizontal+"px");
    $("p").css("top", vertical+"px");

    $("body").keyup(function(e){
        console.log(e.key)
        if(e.key == "a"){
            console.log('izquierda')
            horizontal = horizontal -10
        }

        if(e.key == "d"){
            console.log('derecha')
            horizontal = horizontal +10
        }

        if(e.key == "w"){
            console.log('arriba')
            vertical = vertical -10
        }

        if(e.key == "s"){
            console.log('abajo')
            vertical = vertical +10
        }


        $("p").css("left", horizontal+"px");
        $("p").css("top", vertical+"px");
    })



$(".item").click(function(element){
    var valorid = element.currentTarget.attributes[1].nodeValue
    console.log(valorid)

    //$("#cargardatos").show()
    $("#cargardatos").css("display", "block");
    $("#cargardatos").text(valorid);
   
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });



    
    //alert('hola')
})


});





