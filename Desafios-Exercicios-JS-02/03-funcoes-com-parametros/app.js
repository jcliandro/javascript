// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Adivinhe o número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Informe um número';

//---------------------------------------------------

let numeroSecreto = numeroAleatorio();
console.log(numeroSecreto);

//Função com parâmetros
function exibeTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibeTexto('h1', 'Adivinhe o número Secreto');
exibeTexto('p', 'Informe um número entre 1 e 10');


function verificaChute(){
    let chute = document.querySelector('input').value ;
    console.log(chute == numeroSecreto);
}

//Funçaõ com retorno
function numeroAleatorio() {
    return parseInt(Math.random () * 10 + 1);
}