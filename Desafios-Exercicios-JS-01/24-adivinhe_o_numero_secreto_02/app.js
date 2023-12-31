alert('Seja bem vindo ao jogo "Adivinhe o Número Secreto"');

//Math.random
let numeroSecreto = parseInt(Math.random() *100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
// Se o chute for igual ao número vamos executar a mensagem de Parabéns.


while(chute != numeroSecreto){
    chute = prompt('Escolha um número');    

    if(chute == numeroSecreto){
        break;
        

    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }

        tentativas++;
        console.log(tentativas);
    }

}

//operador Ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o número secreto. O número é ${numeroSecreto}, e você acertou com ${tentativas} ${palavraTentativa}.`);


//if(tentativas > 1){
  //  alert(`Parabéns, você acertou o número secreto. O número é ${numeroSecreto}, e você acertou com ${tentativas} tentativas.`);
//}else{
//    alert(`Parabéns, você acertou o número secreto. O número é ${numeroSecreto}, e você acertou com ${tentativas} tentativa.`);
//}


