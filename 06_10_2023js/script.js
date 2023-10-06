$(document).ready(function(){
    // alert("OI");
    $("#salvar").click(function(){
        nome = $("#nome").val();
        datanasc = $("#datanasc").val();
        cidade = $("#city").val();
        uf = $("#uf").val();
        filhos = $("input[name=filhos]:checked").val();
        // alert(nome + datanasc);
        $("#clientes tbody").append("<tr><td>"+nome+"</td><td>"+datanasc+"</td><td>"+cidade+"</td><td>"+uf+"</td><td>"+filhos+"</td></tr>");
    })
})