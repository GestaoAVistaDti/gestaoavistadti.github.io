/*
Script para imagens.
Utilize apenas imagens locais neste vetor, não links externos, não há suporte para outros links
*/

var imagens = [
    "imgs/1.jpg",
    "imgs/2.jpg",
    "imgs/3.jpg",
    "imgs/4.jpg",
    "imgs/5.jpg",
    "imgs/6.jpg",
    "imgs/7.jpg",
    "imgs/8.jpg",
    "imgs/9.jpg",
    "imgs/10.jpg",
    "imgs/11.jpg",
    "imgs/12.jpg",
    "imgs/13.jpg",
    "imgs/14.jpg",
    "imgs/15.jpg",
    "imgs/16.jpg",
    "imgs/17.jpg",
    "imgs/18.jpg",
    "imgs/19.jpg",
    "imgs/20.jpg",
    "imgs/21.jpg",
    "imgs/22.jpg",
    "imgs/23.jpg",
    "imgs/24.jpg",
    "imgs/25.jpg",
    "imgs/26.jpg",
    "imgs/27.jpg",
    "imgs/28.jpg",
    "imgs/29.jpg",
    "imgs/30.jpg",
    "imgs/31.jpg",
    "imgs/32.jpg",
    "imgs/33.jpg",
    "imgs/34.jpg",
    "imgs/35.jpg",
    "imgs/36.jpg",
    "imgs/37.jpg",
    "imgs/38.jpg",
    "imgs/FeedbackWifi.png",
    "imgs/Keepers.png",
    "imgs/gifcanva2.gif",
    "imgs/CuidadoPrincipio.png",
    "imgs/agilistas.gif",
    "imgs/Formatura4.png",
    
    
    
    
    
    
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
