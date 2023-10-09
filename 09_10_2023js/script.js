$(document).ready(function(){
    // alert("OI");
    $("#salvar").click(function(){
        nome = $("#nome").val();
        datanasc = $("#datanasc").val();
        cidade = $("#city").val();
        uf = $("#uf").val();
        filhos = $("input[name=filhos]:checked").val();
        // alert(nome + datanasc);
        $("#clientes tbody").append("<tr><td>"+nome+"</td><td>"+datanasc+"</td><td>"+cidade+"</td><td>"+uf+"</td><td>"+filhos+"</td><td><input type='button' class='excluir' value='Excluir'</td></tr>");
    })

    // função empty() e remove()
    $("#excluir-tudo").click(function(){
        // $("#clientes").empty(); remove tudo

        $("#clientes tbody").empty();

    })

    $(".excluir").click(function(){
        alert("oi");
    })
})