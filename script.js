var imagens = [
    
    "imgs/aniversarioAbril1.png",
    "imgs/aniversarioAbril2.png",
    "imgs/gifinfra1.gif",
    "imgs/gifinfra5.gif",
    "imgs/gifinfra4.gif",
    "imgs/gifinfra(vitor).gif",
    "imgs/gifinfra2.gif",
    "imgs/gifinfra3.gif",
    "imgs/giffacilities1.gif",
    "imgs/giffacilities2.gif",
    "imgs/giffacilities3.gif",
    "imgs/giffacilities4.gif",
    "imgs/giffacilities5.gif",
    "imgs/gifdticlean3.gif",
    "imgs/gifdticlean2.gif",
    "imgs/gifdticlean1.gif",
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

var tempoImagens = 10000; // tempo em milissegundos para exibir cada imagem
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
