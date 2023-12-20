var imagens = [
    "imgs/lojinha-round_.gif",
    "imgs/cervejaAtualizado.jpg",
    "imgs/halloween1.gif",
    "imgs/FeedbackWifi.png",
    "imgs/Keepers.png",
    "imgs/Halloween2.gif",
    "imgs/gifcanva2.gif",
    "imgs/agilistas.gif",
    "imgs/Halloween3.gif",
];

var links = [
    "https://app.powerbi.com/view?r=eyJrIjoiZTk2NGM3YjktOTk0Ni00YWJjLTkwMjEtOWI3ZTUxMGM5NGJiIiwidCI6IjljODUzYmE1LWNlN2MtNGI3MS05YjE0LTQyOWNlNGRiNzlkZCJ9",

];

var tempoImagens = 12000; // tempo em milissegundos para exibir cada imagem
var tempoLinks = 25000; // tempo em milissegundos para exibir cada link
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