// AND (&&)
// O operador AND, representado pelos símbolos "&&", é utilizado para combinar duas condições e avaliar se ambas são verdadeiras. Se ambas as   condições forem verdadeiras, o resultado será… verdadeiro. Caso contrário, logicamente será falso. Por exemplo:


alert('bem vindo');
let idade = prompt('informe sua idade');
let carteiraMotorista = prompt('Você tem carteira de motorista. "S" para sim e "N" para não.')

if(idade >= 18 && carteiraMotorista == 's'){
    alert('Você pode dirigir');
}else{
    alert('Não pode dirigir');
}