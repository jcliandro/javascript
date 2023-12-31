alert('Seja bem vindo ao jogo "Adivinhe o Número Secreto"');

let numeroSecreto = 15;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 50');

// Se o chute for igual ao número vamos executar a mensagem de Parabéns.

if (chute == numeroSecreto){
    alert(`Parabéns, você acertou o número secreto. O número é ${numeroSecreto}.`);
    //console.log('Parabéns, você acertou o número secreto.');
} else{
    alert('Você errou :(');
}

 