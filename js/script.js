// SITE PARA ANIMAÇÃO WWW.ANIMATE.CSS
$('section#final-de-semana').waypoint(
    function(direcao){
        if(direcao =='down'){
            $('div.folha1').addClass('animate__animated animate__zoomInDown')
            $('div.folha3').addClass('animate__animated animate__zoomInDown')
        }

        if(direcao=='up'){
            $('div.folha3').removeClass('animate__animated animate__zoomInRight')
            $('div.folha3').removeClass('animate__animated animate__zoomInRight')
        }

    },{
        offset:'450px;'
    })




// EXIBE MENU
function mostrarMenu() {
    $('nav ul#esquerda').css('display', 'flex');
    $('nav ul#direita').css('display', 'flex');
}

function esconderMenu() {
    $('nav ul#esquerda').css('display', 'none');
    $('nav ul#direita').css('display', 'none');
}

var controle = true;

$e('nav ul#icone-menu-mobile').click(function () {
    if (controle == true) {
        mostrarMenu();
        controle = false;

    } else {
        esconderMenu();
        controle = true;
    }
})