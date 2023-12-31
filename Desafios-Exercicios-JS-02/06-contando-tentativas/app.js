let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100.');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabens!');
        let palavratentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `O número secreto é ${numeroSecreto}. Você acertou o número secreto com ${tentativas} ${palavratentativa}.`;
        exibirTextoNaTela('p', `${mensagemTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        limparCampo();
    }
    tentativas++;
    
       
}



function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

//limpa campo input
function limparCampo(){
    chute = document.querySelector('input');    
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);    

}


