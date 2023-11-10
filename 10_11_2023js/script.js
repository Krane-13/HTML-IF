$(document).ready(function(){

// para cada(EACH) checkbox marcado... 
// obter a respectiva linha(CLOSEST("TR").REMOVE) e excuir-lá
// ?.remove()

$("#excluir-selec").click(function(){
        $(".selecao:checked").each(function(){
            //alert("OI")
            $(this).closest("tr").remove();
        })
    })
    $("#marca").change(function(){
        // alert("OI");
        marca = $(this).val();
        // alert(marca);
        $("#veiculos tbody tr").hide();
        $("."+marca).closest("tr").show();
    })
})