//Data de criação: 30/11/2023
//Autor: Jean Carlos Liandro

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.


let numeroMaximo = prompt('Escolha um número')

while(numeroMaximo >= 0){
    console.log('testando numero maximo', numeroMaximo);

    //vamos incrementar
    numeroMaximo = numeroMaximo - 1;
}