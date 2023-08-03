$(document).ready(function() {
    console.log (document.querySelector("header button"));
    console.log$("header button");
})
    document.querySelector('header button').addEventListener('click', function(){
    })

    $('#botao-cancelar').click(function(){
    $('form').slideUp();
    })

    $('header button').click(function(){
        $('form').slideDown();

        $('form').on('submit', function(e) {
            e.preventDefault();
            const enderecoDaNovaImagem = $('endereco-imagem-nova').val();
            const novoItem = $('<li></li>');
            $(`<img src="${enderecoDaNovaImagem}"/>`).apendTo(novoItem)
            $(`
                <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" titile="Ver imagem em tamanho real"
                    ver imegem em tamanho real 
                </a>
                </div>
        `).apendTo(novoItem);
        $(novoItem).apendTo('ul');
        $(novoItem).fadeIn();
        $('#endereco-imagem-nova').val('')
        })
    })