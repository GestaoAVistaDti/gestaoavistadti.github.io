var imagens = [  
    "imgs/videoconferencia.jpg",
    "imgs/FeedbackWifi.png",
    "imgs/Keepers.png",
    "imgs/gifcanva2.gif",
    "imgs/agilistas.gif",
    "imgs/MentoriaConvite.png",
    "imgs/gif_produtividade(pt-1).gif",
    "imgs/gif_produtividade(pt-2).gif",
]; // array com as imagens

var links = [
    "https://dti.ag/GestaoaVista",

];

var tempoImagens = 12000; // tempo em milissegundos para exibir cada imagem
var tempoLinks = 45000; // tempo em milissegundos para exibir cada link
var indiceImagens = 0; // índice atual da imagem
var indiceLinks = 0; // índice atual do link

function mostrarImagem() {
    document.getElementById("minha-imagem").style.display = "block";
    document.getElementById("link-iframe").style.display = "none";
    document.getElementById("minha-imagem").src = imagens[indiceImagens];
    indiceImagens = (indiceImagens + 1) % imagens.length;
    setTimeout(mostrarLink, tempoImagens);
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
