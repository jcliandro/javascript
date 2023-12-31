let horaDesafio = document.querySelector('h1');
horaDesafio.innerHTML ='Hora do Desafio';

function MensagemNoConsole(){
    console.log('Botão clicado.')
}

function amoJs(){
    alert('Eu pratico JS');
}


function nomeCidade(){
    let cidade = prompt('Diga o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function somaDoisNumeros(){
    let primeiroNumero = parseInt(prompt('Informe um número'));
    let segundoNumero = parseInt(prompt('Informe um segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} mais o número ${segundoNumero} é igual a ${resultado}.`);
}






