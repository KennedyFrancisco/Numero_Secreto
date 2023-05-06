const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 100)
}

const elementoMenorValor = document.querySelector("#menor_valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector("#maior_valor");
elementoMaiorValor.innerHTML = maiorValor;

console.log(numeroSecreto)
