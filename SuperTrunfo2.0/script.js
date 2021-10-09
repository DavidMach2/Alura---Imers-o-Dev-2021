var cartas = [
  (carta1 = {
    nome: 'Bulbassauro',
    imagem: 'https://wallpapercave.com/wp/9fZxwqn.jpg',
    // criação  objeto
    atributos: {
      Ataque: 7,
      Defesa: 8,
      Magia: 6
    }
  }),
  (carta2 = {
    nome: 'Darth Vader',
    imagem: 'https://wallpaperaccess.com/full/1087224.jpg',
    atributos: {
      Ataque: 9,
      Defesa: 8,
      Magia: 2
    }
  }),
  (carta3 = {
    nome: 'Shiryu de Dragão',
    imagem:
      'https://i.pinimg.com/originals/93/52/73/935273e1e16f07911849c145812e3ce4.jpg',
    atributos: {
      Ataque: 5,
      Defesa: 9,
      Magia: 10
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
  //exibirOpcoes();
  exibirCartaJogador()
}

/*function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value=" + atributo + ">" + atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}*/

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
  var divResultado = document.getElementById('resultado')

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class = 'resultado-final'>Venceu</p>"
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class = 'resultado-final'>Perdeu</p>"
  } else {
    htmlResultado = "<p class = 'resultado-final'>Empatou</p>"
  }
  divResultado.innerHTML = htmlResultado

  document.getElementById('btnJogar').disabled = 'true'
  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById('carta-jogador')
  //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id = 'opcoes' class = 'carta-status'>"

  var opcoesTexto = ''
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value=" +
      atributo +
      '>' +
      atributo +
      ' ' +
      cartaJogador.atributos[atributo] +
      '<br>'
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById('carta-maquina')
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id = 'opcoes' class = 'carta-status'>"

  var opcoesTexto = ''
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value=" +
      atributo +
      '>' +
      atributo +
      ' ' +
      cartaMaquina.atributos[atributo] +
      '</p>'
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}
