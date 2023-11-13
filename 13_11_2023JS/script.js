$(document).ready(function(){

// para cada(EACH) checkbox marcado... 
// obter a respectiva linha(CLOSEST("TR").REMOVE) e excuir-lá
// ?.remove()

$("#excluir-selec").click(function(){
    alert($("#arquivo").val().replace("C:\\fakepath\\", ''));
        $(".selecao:checked").each(function(){
            //alert("OI")
            $(this).closest("tr").remove();
        })
    })
    $("#marca").change(function(){
        // alert("OI");
        marca = $(this).val();
        if (marca == "--Todos--"){
            $("#veiculos tbody tr").show();
        }
        else{
            // alert(marca);
            $("#veiculos tbody tr").hide();
            $("."+marca).closest("tr").show();
        };

        
    })
})