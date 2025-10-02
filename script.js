

const IMAGENS = [
	'imgs/evolve.gif',
	'imgs/GifTV_Garden_EntreChaves.gif',
	'imgs/GifTV_Agilistas.gif',
	'imgs/TV_Fluxograma.gif',
	'imgs/TV_Beneficios.gif',
];

const IMAGENS_DPS_18 = [
	
];

const LINKS = ['https://agreeable-rock-017c1aa0f.1.azurestaticapps.net/'];

const TEMPO = {
	imagens: 35000,
	links: 45000,
};

const estado = {
	indiceImagens: 0,
	indiceImagensDps18: 0,
	indiceLinks: 0,
	temporizador: null,
	cicloAtual: 'imagens', // 'imagens' ou 'links'
	contadorCiclos: 0,
	indiceGlobal: 0 // Novo: índice global para controlar todas as barras
};
function atualizarExibicao(indice = null) {
	const isDepoisDas18 = eHorarioDepoisDas18h() && IMAGENS_DPS_18.length > 0;
	const imagensAtual = isDepoisDas18 ? IMAGENS_DPS_18 : IMAGENS;
	let indiceAtual = isDepoisDas18
		? estado.indiceImagensDps18
		: estado.indiceImagens;

	if (indice !== null) {
		indiceAtual = indice;
	} else if (!isDepoisDas18) {
		indiceAtual = (indiceAtual + 1) % imagensAtual.length;
	}

	document.getElementById('minha-imagem').src = imagensAtual[indiceAtual];
	document.getElementById('minha-imagem').style.display = 'block';
	document.getElementById('link-iframe').style.display = 'none';

	atualizarBotoesPaginacao(indiceAtual);

	if (isDepoisDas18) {
		estado.indiceImagensDps18 = indiceAtual;
	} else {
		estado.indiceImagens = indiceAtual;
	}

	return indiceAtual;
}

function atualizarBotoesPaginacao(indiceAtivo) {
	document
		.querySelectorAll('#paginacao-imagens li button')
		.forEach((btn, idx) => {
			btn.classList.toggle('ativo', idx === indiceAtivo);
		});
}

function mostrarLink() {
	// Calcular o índice global atual (imagens + links já exibidos)
	const isDepoisDas18 = eHorarioDepoisDas18h() && IMAGENS_DPS_18.length > 0;
	const imagensAtual = isDepoisDas18 ? IMAGENS_DPS_18 : IMAGENS;
	const indiceGlobalAtual = imagensAtual.length + estado.indiceLinks;
	
	barraProgresso(indiceGlobalAtual);
	clearTimeout(estado.temporizador);
	document.getElementById('link-iframe').style.display = 'block';
	document.getElementById('minha-imagem').style.display = 'none';
	document.getElementById('link-iframe').src = LINKS[estado.indiceLinks];
	
	// Após mostrar todos os links, voltar para imagens
	if (estado.indiceLinks === LINKS.length - 1) {
		estado.cicloAtual = 'imagens';
		estado.indiceLinks = 0; // Reset do índice de links
		estado.temporizador = setTimeout(() => mostrarImagem(), TEMPO.links);
	} else {
		estado.indiceLinks = (estado.indiceLinks + 1) % LINKS.length;
		estado.temporizador = setTimeout(() => mostrarLink(), TEMPO.links);
	}
}



function eHorarioDepoisDas18h() {
	const horaAtual = new Date().getHours();
	return horaAtual >= 7;
}

// function proximoIndice() {
// 	clearTimeout(estado.temporizador);
	
// 	if (estado.cicloAtual === 'imagens') {
// 		mostrarImagem();
// 	} else {
// 		// Se está nos links, voltar para imagens
// 		estado.cicloAtual = 'imagens';
// 		estado.indiceLinks = 0;
// 		// Resetar o índice de imagens para começar do início
// 		estado.indiceImagens = 0;
// 		estado.indiceImagensDps18 = 0;
// 		mostrarImagem();
// 	}
// }

function inicializarCliqueTela() {
	// Adicionar listener de clique em toda a tela
	document.addEventListener('click', function(event) {
		// Evitar conflito com os botões de paginação
		if (!event.target.closest('#paginacao-imagens')) {
			ExibirProximoConteudo();
		}
	});
}

window.onload = function () {
	inicializarCliqueTela(); // Adicionar inicialização do clique
	mostrarImagem();
};

function barraProgresso(indiceAtual) {
    var progressBarContainer = document.getElementById('progressBarContainer');
    progressBarContainer.innerHTML = ''; // Limpa barras de progresso antigas

    // Calcular total de páginas: imagens + links
    const isDepoisDas18 = eHorarioDepoisDas18h() && IMAGENS_DPS_18.length > 0;
    const imagensAtual = isDepoisDas18 ? IMAGENS_DPS_18 : IMAGENS;
    var total_pages = imagensAtual.length + LINKS.length;
    
    // Determinar o tempo baseado no tipo de conteúdo atual
    var time_to_change = estado.cicloAtual === 'imagens' ? TEMPO.imagens : TEMPO.links;

    var id; // Definindo o id do setInterval fora do loop

    for(var i = 0; i < total_pages; i++) {
        var progressBar = document.createElement('div');
        progressBar.className = 'progressBar';
        var progress = document.createElement('div');
        progress.className = 'progress';
        
        if(i < indiceAtual) {
            progress.style.width = '100%'; // Se já foi mostrado, preenche a barra
        } else if(i === indiceAtual) {
            progress.style.width = '0%'; // Inicializa a barra atual com 0%
            id = setInterval(frame, (time_to_change / 100), progress);
        }
        
        progressBar.appendChild(progress);
        progressBarContainer.appendChild(progressBar);
    }

    function frame(progress) {
        var width = progress.style.width.replace('%', '') || 0;
        if(width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            progress.style.width = width + '%'; 
        }
    }
}

function ExibirProximoConteudo() {
    if (estado.cicloAtual === 'imagens') {
        mostrarImagem();
    } else {
        mostrarLink();
    }
}

function mostrarImagem(indice = null) {
    clearTimeout(estado.temporizador);
    var indiceAtual = atualizarExibicao(indice);
    
    // Se foi chamado manualmente (clique), usar o índice fornecido
    if (indice !== null) {
        barraProgresso(indice);
    } else {
        barraProgresso(indiceAtual);
    }
    
    // Após mostrar todas as imagens, alternar para links
    // Só passa para links quando realmente termina o ciclo completo das imagens
    const isDepoisDas18 = eHorarioDepoisDas18h() && IMAGENS_DPS_18.length > 0;
    const imagensAtual = isDepoisDas18 ? IMAGENS_DPS_18 : IMAGENS;
    
    if (indiceAtual === imagensAtual.length - 1 && indice === null) {
        estado.cicloAtual = 'links';
        estado.indiceLinks = 0; // Reset do índice de links
        estado.temporizador = setTimeout(() => mostrarLink(), TEMPO.imagens);
    } else {
        estado.temporizador = setTimeout(() => mostrarImagem(), TEMPO.imagens);
    }
}
