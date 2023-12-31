// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.


let numero = prompt('Informe um número:');

if (numero > 0){
    alert('Você informou um número positivo');
    
}else{
    if(numero < 0){
        alert('Você informou um número negativo.');
    }else{
        alert('Numero zero não tem valor.');
    }
}