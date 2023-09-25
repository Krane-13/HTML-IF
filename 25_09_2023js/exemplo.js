$(document).ready(function(){
    // if (confirm("Deseja salvar as informações?")){
    //     alert("Informação salvas com sucesso");
    // }else{
    //     alert("Inserção cancelada");
    // } Função text() -> get pega o conteudo textual ->set mudar o conteudo textual

    paragrafo = $("p").text(); // obtanção de conteudo textual
    //alert(paragrafo);
    num = 10
    
    $("p").text("Mensagem trocada"); // mudança de conteudo textual
    $("#especial").text("Mensagem trocada\n"  + num); // mudança de conteudo textual

    // Função Val() -> obtém/altera Valor de um CAMPO DE FORMULARIO 

    //Monitorar o evento de clique no botao salvar
    $("#salvar").click(function(){
       /* //alert("OI");
        valor = $("#nome").val();
        uf = $("#uf").val();

        if(uf =="RS"){
            mensagem = "Você é de Rio Grande do Sul";
        }else{
            mensagem = "Você é do exterior";
        }

        //alert("O que foi digitado na caixa: " + valor);
        alert(mensagem);
        */

        // Função append() -> acrescenta conteúdo ao final de um elemento
        $("#uf").append("<option value='TE'>Teste</option>");
    });

})