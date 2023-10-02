$(document).ready(function(){
    // alert("OI");
    $("#salvar").click(function(){
        nome = $("#nome").val();
        datanasc = $("#datanasc").val();
        // alert(nome + datanasc);
        $("#clientes tbody").append("<tr><td>"+nome+"</td><td>"+datanasc+"</td></tr>");
    })
})