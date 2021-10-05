var cartas = [
  (carta1 = {
    nome: 'Bulbassauro',
    atributos: {
      // criação  objeto
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  }),
  (carta2 = {
    nome: 'Darth Vader',
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  }),
  (carta3 = {
    nome: 'Shiryu de Dragão',
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  })
]

//console.log(carta1.atributos.ataque) //acessar um objeto dentro de objeto

/*var cartas = [carta1, carta2, carta3];*/
var cartaMaquina = 0
var cartaJogador = 0

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ''
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value=" + atributo + '>' + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  //console.log(atributoSelecionado);
  //console.log(cartaJogador.atributos[atributoSelecionado]);
  var atributoSelecionado = obtemAtributoSelecionado()
  var elementoResultado = document.getElementById('resultado')
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

  if (atributoSelecionado == undefined) {
    //console.log("Escolha um atributo")
    elementoResultado.innerHTML = 'Escolha um atributo'
    //console.log(atributoSelecionado)
  } else {
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = 'Você Venceu!'
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = 'Você Perdeu!'
    } else {
      elementoResultado.innerHTML = 'Empatou!'
    }
    console.log(cartaMaquina)
  }
}
