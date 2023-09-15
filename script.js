/*
Script para imagens.
Utilize apenas imagens locais neste vetor, não links externos, não há suporte para outros links
*/

var imagens = [
    "imgs/FeedbackWifi.png",
    "imgs/Keepers.png",
    "imgs/gifcanva2.gif",
    "imgs/CuidadoPrincipio.png",
    "imgs/agilistas.gif",
    "imgs/Formatura4.png",
    "imgs/1.png",
    "imgs/2.png",
    "imgs/3.png",
    "imgs/4.png",
    "imgs/5.png",
    "imgs/6.png",
    "imgs/7.png",
    "imgs/8.png",
    "imgs/9.png",
    "imgs/10.png",
    "imgs/11.png",
    "imgs/12.png",
    "imgs/13.png",
    "imgs/14.png",
    "imgs/15.png",
    "imgs/16.png",
    "imgs/17.png",
    "imgs/18.png",
    "imgs/19.png",
    "imgs/20.png",
    "imgs/21.png",
    "imgs/22.png",
    "imgs/23.png",
    "imgs/24.png",
    "imgs/25.png",
    "imgs/26.png",
    "imgs/27.png",
    "imgs/28.png",
    "imgs/29.png",
    "imgs/30.png",
    "imgs/31.png",
    "imgs/32.png",
    "imgs/33.png",
    "imgs/34.png",
    "imgs/35.png",


    
    


]; // array com as imagens
var tempo = 23000; // tempo em milissegundos para trocar as imagens
var indice = 0; // indice atual da imagem

function trocarImagem() {
    document.getElementById("minha-imagem").src = imagens[indice];
    indice++;
    if (indice == imagens.length) {
        indice = 0;
    }
    setTimeout(trocarImagem, tempo);
}

window.onload = function () {
    trocarImagem();
};


/*
Script para iframe.
Utilize apenas links embled ou links de outros sites, não arquivos diretos, estes costumam sair fora de formatação
*/

var links = [
    "https://drive.google.com/file/d/1D7oT6xbwJMZOuemyPI0H_0pNxY84dZmJ/preview",
    "https://drive.google.com/file/d/13TPhtzS3TnrHEZlwqdUmhjVoryUHXsfE/preview",
    "https://drive.google.com/file/d/1GagAgdX7h1PhncvP1Snpn5OxQ7YrYS9r/preview",
];
var indice = 0;
var intervalo;
function iniciarRotina() {
    var iframe = document.getElementById("link-iframe");
    iframe.src = links[indice];
    indice = (indice + 1) % links.length;
}
function comecarRotina() {
    iniciarRotina();
    intervalo = setInterval(iniciarRotina, 18000);
}
function pararRotina() {
    clearInterval(intervalo);
}
