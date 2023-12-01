var input = document.querySelector("#imagemProduto");

input.addEventListener("change", function (e) {
    var tgt = e.target || window.event.srcElement;

    var files = tgt.files;

    var fr = new FileReader();

    fr.onload = function () {
        document.querySelector("#preview-image").src = fr.result;
    }
    fr.readAsDataURL(files[0]);


});


function adicionarProduto() {
    var nomeProduto = $('#nomeProduto').val();
    var imagemProduto = $('#imagemProduto').val().replace("C:\\fakepath\\", '');
    var precoProduto = $('#precoProduto').val();
    var categoriaProduto = $('#categoriaProduto').val();

// alert(imagemProduto);

    // if (nomeProduto.trim() === '') {
    //     alert('Por favor, insira o nome do produto.');
    //     return;
    // }

    var novoProduto = $('<div class="'+ categoriaProduto+'" >' +
        '<h3>' + nomeProduto + '</h3>' +
        '<img src="' + imagemProduto + '" alt="Imagem do Produto" width="200px">' +
        '<p><strong>Preço:</strong> R$' + precoProduto + '</p>' +
        '<p><strong>Categoria:</strong> ' + categoriaProduto + '</p>' +
        "<input type='button' class='excluir' value='Excluir'>"+
        '</div>');

    $('#produtosContainer').append(novoProduto);




    $('#nomeProduto').val('');
    $('#preview-image').val('');
    $('#precoProduto').val('');
    $('#categoriaProduto').val('');
};

$("#catPro").change(function () {
    
    categoriaProd = $(this).val();

    $("#produtosContainer div").hide();
    $('.' + categoriaProd).show();

})

$("#produtosContainer").on("click", ".excluir", function(){
    $(this).closest("div").remove();
})