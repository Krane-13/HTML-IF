$(document).ready(function(){
    km_total = 0;
    tempo_total = 0;

    $("#adicionar").click(function(){
        de = $("#de").val();
        para = $("#para").val();
        km = $("#km").val();
        velocidade = $("#velocidade").val();
        tempo = km/velocidade;

        $("#trajetos tbody").append("<tr><td>"+de+"</td><td>"+para+"</td><td>"+km+"</td><td>"+velocidade+"</td><td>"+tempo.toFixed(2)+"horas</td><td><input type='button' class='excluir' value='Excluir'</td></tr");

        km_total = km_total + parseInt(km);
        $('#km_total').text(km_total)

        tempo_total = tempo_total + tempo;
        $('#tempo_total').text(tempo_total.toFixed(2));


    })

    $("#trajetos tbody").on("click",".excluir",function(){

        $(this).closest("tr").remove();

        km_total = km_total - km;
        $('#km_total').text(km_total);

        tempo_total = tempo_total - tempo;
        $('#tempo_total').text(tempo_total.toFixed(2));
    })
})