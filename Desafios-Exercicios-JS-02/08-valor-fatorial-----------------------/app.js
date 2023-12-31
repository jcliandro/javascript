//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.


// Este exercício não consegui fazer sem a resolução do defafio.

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero = 1;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);