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
})