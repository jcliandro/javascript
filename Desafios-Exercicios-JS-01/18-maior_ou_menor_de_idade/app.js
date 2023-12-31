// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

idade = prompt('Informe sua idade:')

if(idade >= 18){
    alert(`Você é maior de idade por ter ${idade} anos.`)
}else{
    alert(`Você é menor de idade por ter ${idade} anos.`)
}