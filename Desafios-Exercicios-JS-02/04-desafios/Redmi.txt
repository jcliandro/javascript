// Criar uma função que exibe "Olá, mundo!" no console.
function boasVindas(){
    console.log('Boas Vindas!')
}
boasVindas();


// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibeNome(nome){
    console.log(`Olá, ${nome}`);
}
let nome = exibeNome('Jean');


// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroDoNumero(numero){
    return numero *  2;
}
let numeroEscolhido = dobroDoNumero(4);
console.log(numeroEscolhido);


// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaDeNumeros(a,b,c){
    return (a + b + c) / 3;
}
let media = mediaDeNumeros(1,5,10);
console.log(media);


// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornaMaiorNumero(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}
let maiorNumero = retornaMaiorNumero(11,10);
console.log(maiorNumero);


// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadradodeNumero(numerox){
    return numerox * numerox;
}
let resultadoNumero = quadradodeNumero(10);
console.log(resultadoNumero);