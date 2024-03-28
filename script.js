var imagens = [
    "imgs/making space.jpg",
    "imgs/aniversarioGaia2.png",
    "imgs/aniversarioGaia1.png",
    "imgs/Vídeo Apresentação - Infra 3 (1).gif",
    "imgs/Vídeo Apresentação - Facilities 2.gif",
    "img/Vídeo Apresentação - dti clean 1.gif",
    "imgs/videoconferencia.jpg",
    "imgs/FeedbackWifi.png",
    "imgs/semana-4_produtividade1.gif",
    "imgs/semana-4_produtividade2.gif",
    "imgs/Keepers.png",
    "imgs/gifcanva2.gif",
    "imgs/agilistas.gif",
    "imgs/Limpeza.gif",
    "imgs/NavegueDtiRound.gif"
]; // array com as imagens

var links = [
    "https://dti.ag/GestaoaVista",

];

var tempoImagens = 20000; // tempo em milissegundos para exibir cada imagem
var tempoLinks = 45000; // tempo em milissegundos para exibir cada link
var indiceImagens = 0; // índice atual da imagem
var indiceLinks = 0; // índice atual do link

function mostrarImagem() {
    document.getElementById("minha-imagem").style.display = "block";
    document.getElementById("link-iframe").style.display = "none";
    document.getElementById("minha-imagem").src = imagens[indiceImagens];
    indiceImagens = (indiceImagens + 1) % imagens.length;
    setTimeout(mostrarImagem, tempoImagens);
    /*if (indiceImagens == 0) {
        setTimeout(mostrarLink, tempoImagens);
        
    } else {
        setTimeout(mostrarImagem, tempoImagens);
        
    }*/
}

function mostrarLink() {
    document.getElementById("link-iframe").style.display = "block";
    document.getElementById("minha-imagem").style.display = "none";
    document.getElementById("link-iframe").src = links[indiceLinks];
    indiceLinks = (indiceLinks + 1) % links.length;
    setTimeout(mostrarImagem, tempoLinks);
}

window.onload = function () {
    mostrarImagem();
};
