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
        quant_linhas = $("#clientes tbody tr").length
        $('#quant').text(quant_linhas)
    })

    // função empty() e remove()
    $("#excluir-tudo").click(function(){
        // $("#clientes").empty(); remove tudo

        $("#clientes tbody").empty();

        quant_linhas = $("#clientes tbody tr").length
        $('#quant').text(quant_linhas)

    })
    // essa função abaixo não funciona por que o botão não esta no HTML
    // $(".excluir").click(function(){
    //     alert("oi");
    // })


    // this -> variável que refere-se ao objeto que sofre a ação

    // a função abaixo funciona
    $("#clientes tbody").on("click",".excluir",function(){
        //alert("oi");

        //remove() -> excluir conteúdo HTML

        $(this).closest("tr").remove();
        quant_linhas = $("#clientes tbody tr").length;
        $('#quant').text(quant_linhas)
        //alert(quant_linhas);
    })

})