//Data criação: 27/11/2023
//Autor: Jean Carlos Liandro
//Data da última alteração: 28/11/2023

// -------Primeira Habilitação.

alert('Boas vindas ao nosso Site');

let nome = prompt('Informe o seu nome:')
let idade = prompt('Informe sua idade:')

if(idade > 18 || idade == 18){
    alert('Você já pode tirar a sua habilitação.')
}

if(idade < 18){
    alert('Você não tem idade com permissão para adquirir carteira de motorista');
    
}

