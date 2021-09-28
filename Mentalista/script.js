var numeroSecreto = parseInt(Math.random() * 11)
var tentativa = 3

function Chutar() {
  var elementoResultado = document.getElementById('resultado')
  var chute = parseInt(document.getElementById('valor').value)
  console.log(numeroSecreto)

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = 'Acertô!'
    tentativa = 3
    numeroSecreto = parseInt(Math.random() * 11)
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = 'Digite um número entre 0 e 10!'
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      'Erroooou! O numero secreto é MAIOR! | Tentativa ' + tentativa + ' de 3'
    tentativa--
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      'Erroooou! O numero secreto é MENOR! | Tentativa ' + tentativa + ' de 3'
    tentativa--
  }
  if (tentativa == 0) {
    elementoResultado.innerHTML =
      'Que pena, acabaram as chances | Jogo Resetado'
    tentativa = 3
    numeroSecreto = parseInt(Math.random() * 11)
  }
}
