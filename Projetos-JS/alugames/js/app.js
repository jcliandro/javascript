let jogosAlugados = 0;

function exibirJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`)
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        //Adiciona uma confirmação antes de devolver o jogo.
        if (confirm(`Voce realmente deseja fazer devolução do jogo ${nomeJogo.textContent}`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados= jogosAlugados -1;
        }
        
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados= jogosAlugados +1;
    }

    exibirJogosAlugados();
}   


//Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"
