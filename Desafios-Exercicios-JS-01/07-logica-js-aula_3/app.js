alert('Olá, seja bem vindo ao meu jogo "NÚMERO SECRETO".')

let numeroSecreto = 4;
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('escolha um numero');

    if(chute == numeroSecreto){
        alert('Parabens');
    }else{
        if(chute > numeroSecreto){
            alert('o numero é mmenor');
        }else{
            alert('o número é maior');
        }
    }

    tentativa = tentativas + 1;

}


