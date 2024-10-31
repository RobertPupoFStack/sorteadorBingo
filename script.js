const board = document.getElementById('bingo-board');
const drawButton = document.getElementById('draw-button');
const drawnNumberDisplay = document.getElementById('drawn-number');
let drawnNumbers = [];

// Gera os números no tabuleiro de 1 a 75
for (let i = 1; i <= 75; i++) {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number');
    numberElement.textContent = i;
    numberElement.setAttribute('data-number', i);
    board.appendChild(numberElement);
}

// Função para sortear um número
function drawNumber() {
    if (drawnNumbers.length >= 24) {
        alert('Todos os números já foram sorteados.');
        return;
    }

    let number;
    do {
        number = Math.floor(Math.random() * 75) + 1;
    } while (drawnNumbers.includes(number));

    drawnNumbers.push(number);
    showDrawnNumber(number);
}

// Exibe o número sorteado com uma animação
function showDrawnNumber(number) {
    const selectedElement = document.querySelector(`.number[data-number="${number}"]`);
    if (selectedElement) {
        selectedElement.classList.add('drawn');
    }

    drawnNumberDisplay.style.opacity = 0; // Reseta a opacidade para a animação
    drawnNumberDisplay.textContent = `Número sorteado: ${number}`;
    drawnNumberDisplay.style.animation = 'none'; // Reseta a animação

    setTimeout(() => {
        drawnNumberDisplay.style.animation = ''; // Inicia a animação novamente
    }, 0);
}

// Vincula o evento ao botão de sorteio
drawButton.addEventListener('click', drawNumber);
