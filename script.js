var imagensDpsDas18 = [

];
var imagens = [
    "imgs/evolve.gif",
    "imgs/semana-4_produtividade1.gif",
    "imgs/semana-4_produtividade2.gif",
    "imgs/gifcanva2.gif",
    "imgs/agilistas.gif",
]; // array com as imagens

var links = [
    "https://dti.ag/GestaoaVista",

];

var tempoImagens =10000; // tempo em milissegundos para exibir cada imagem
var tempoLinks = 45000; // tempo em milissegundos para exibir cada link
var indiceImagens = 0; // índice atual da imagem
var indiceImagensDps18 = 0; // índice atual da imagemDps18
var indiceLinks = 0; // índice atual do link

function mostrarImagem() {
    document.getElementById("minha-imagem").style.display = "block";
    document.getElementById("link-iframe").style.display = "none";
    if(horarioDepoisDas18h()&& imagensDpsDas18.length>0){
        document.getElementById("minha-imagem").src = imagensDpsDas18[indiceImagensDps18];
    } else {
        document.getElementById("minha-imagem").src = imagens[indiceImagens];
    }
    indiceImagensDps18 = (indiceImagensDps18 + 1) % imagensDpsDas18.length;
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

function horarioDepoisDas18h() {
    // Obtendo a data e hora atual
    var dataAtual = new Date();
    var fusoHorarioBrasilia = -3; // Para horário padrão de Brasília
    var horasBrasilia = dataAtual.getHours();

    // Verificando se o horário é depois das 18h
    if (horasBrasilia >= 18) {
        return true;
    } else {
        return false;
    }
}

