var pontos = 0;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var alvo = document.getElementById('alvo');
    alvo.addEventListener('click', marcaPontos);

    setInterval(posicionarAlvoAleatoriamente, 2000);

    // Adicionar evento de clique global
    document.addEventListener('click', detectarCliqueForaDoAlvo);
}

function posicionarAlvoAleatoriamente() {
    const container = document.getElementById('container');
    const alvo = document.getElementById('alvo');

    // Dimensões do container e do alvo
    const larguraContainer = container.clientWidth;
    const alturaContainer = container.clientHeight;
    const larguraAlvo = alvo.offsetWidth;
    const alturaAlvo = alvo.offsetHeight;

    // Posição aleatória
    const posicaoX = Math.random() * (larguraContainer - larguraAlvo);
    const posicaoY = Math.random() * (alturaContainer - alturaAlvo);

    // Definindo a posição do alvo
    alvo.style.left = `${posicaoX - 50}px`;
    alvo.style.top = `${posicaoY - 50}px`;
}

function marcaPontos(event) {
    event.stopPropagation(); // Impede que o clique no alvo seja propagado para o documento
    pontos++;
    navigator.notification.beep(1);
    document.getElementById('pontuacao').textContent = `Pontuação : ${pontos}`;
}

function detectarCliqueForaDoAlvo(event) {
    const alvo = document.getElementById('alvo');
    if (!alvo.contains(event.target)) {
        navigator.notification.beep(2);
    }
}