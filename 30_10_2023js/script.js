$(document).ready(function(){
    km_total = 0;
    tempo_total = 0;

    function funcaoDeExemploDoEach(){
        $(".km").each(function(){
           alert($(this).text()); 
        })
    }

    $("#adicionar").click(function(){
        de = $("#de").val();
        para = $("#para").val();
        km = $("#km").val();
        velocidade = $("#velocidade").val();
        tempo = km/velocidade;

        $("#trajetos tbody").append("<tr><td>"+de+"</td><td>"+para+"</td><td class='km'>"+km+"</td><td>"+velocidade+"</td><td class='tempo'>"+tempo.toFixed(2)+"</td><td><input type='button' class='excluir' value='Excluir'</td></tr");

        km_total = km_total + parseInt(km);
        $('#km_total').text(km_total)

        tempo_total = tempo_total + tempo;
        $('#tempo_total').text(tempo_total.toFixed(2));

        funcaoDeExemploDoEach();

    })

    $("#trajetos tbody").on("click",".excluir",function(){

        km = $(this).closest("tr").find(".km").text();
        tempo = $(this).closest("tr").find(".tempo").text();

        $(this).closest("tr").remove();

        km_total = km_total - km;
        $('#km_total').text(km_total);

        tempo_total = tempo_total - tempo;
        $('#tempo_total').text(tempo_total.toFixed(2));
    })
})