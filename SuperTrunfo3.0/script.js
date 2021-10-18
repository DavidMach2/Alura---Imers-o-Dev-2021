var cartas = [
  (carta1 = {
    nome: 'Jimi Hendrix',
    imagem:
      'https://rollingstone.uol.com.br/media/uploads/jimi-hendrix-bruce_fleming-ap_images.jpg',
    // criação  objeto
    atributos: {
      Velocidade: 6,
      Tecnica: 5,
      Solo: 7,
      Feeling: 9
    }
  }),
  (carta2 = {
    nome: 'Jimmy Page',
    imagem:
      'https://hqrock.files.wordpress.com/2014/06/jimmy-page-double-guitar.jpg',
    atributos: {
      Velocidade: 6,
      Tecnica: 6,
      Solo: 8,
      Feeling: 10
    }
  }),
  (carta3 = {
    nome: 'Eddie Van Halen',
    imagem:
      'https://www.portaldenoticias.com.br/arquivos/colunistas/1244/b993765b53428a58be7ab30bdb2dc124.jpg',
    atributos: {
      Velocidade: 7,
      Tecnica: 8,
      Solo: 7,
      Feeling: 7
    }
  }),
  (carta4 = {
    nome: 'Tony Iommi',
    imagem:
      'https://rollingstone.uol.com.br/media/_versions/img-1027231-tony-iommi_1_1_widelg.jpg',
    atributos: {
      Velocidade: 7,
      Tecnica: 8,
      Solo: 8,
      Feeling: 6
    }
  }),
  (carta5 = {
    nome: 'Dimebag Darell',
    imagem:
      'https://roadie-metal.com/wp-content/uploads/2018/01/dimebag-darrell-thickburger_0_0jpg.jpg',
    atributos: {
      Velocidade: 7,
      Tecnica: 7,
      Solo: 8,
      Feeling: 7
    }
  }),
  (carta6 = {
    nome: 'Steve Vai',
    imagem:
      'https://www.radiorock.com.br/wp-content/uploads/2020/12/steve-vai.jpg',
    atributos: {
      Velocidade: 8,
      Tecnica: 10,
      Solo: 8,
      Feeling: 9
    }
  }),
  (carta7 = {
    nome: 'Kirk Hammett',
    imagem:
      'https://roadie-metal.com/wp-content/uploads/2021/07/Kirk-Hammett.jpg',
    atributos: {
      Velocidade: 7,
      Tecnica: 8,
      Solo: 8,
      Feeling: 8
    }
  }),
  (carta8 = {
    nome: 'Zakk Wylde',
    imagem:
      'https://acordeemny.com.br/wp-content/uploads/2020/06/Zakk-Wylde-Idade-Altura-e-Peso.jpg',
    atributos: {
      Velocidade: 8,
      Tecnica: 7,
      Solo: 8,
      Feeling: 10
    }
  }),
  (carta9 = {
    nome: 'Andreas Kisser',
    imagem:
      'https://roadie-metal.com/wp-content/uploads/2018/01/andreas-kisser.jpg',
    atributos: {
      Velocidade: 8,
      Tecnica: 8,
      Solo: 8,
      Feeling: 8
    }
  }),
  (carta10 = {
    nome: 'Synyster Gates',
    imagem: 'https://roadie-metal.com/wp-content/uploads/2018/06/avenge.jpg',
    atributos: {
      Velocidade: 7,
      Tecnica: 9,
      Solo: 8,
      Feeling: 10
    }
  }),
  (carta11 = {
    nome: 'Herman Li',
    imagem: 'https://roadie-metal.com/wp-content/uploads/2020/04/herman.jpg',
    atributos: {
      Velocidade: 10,
      Tecnica: 8,
      Solo: 7,
      Feeling: 7
    }
  }),
  (carta12 = {
    nome: 'Paul Gilbert',
    imagem: 'https://i.ytimg.com/vi/aQ2LLIziZ7c/maxresdefault.jpg',
    atributos: {
      Velocidade: 10,
      Tecnica: 9,
      Solo: 7,
      Feeling: 7
    }
  }),
  (carta13 = {
    nome: 'Marty Friedman',
    imagem:
      'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/07/marty-friedman-696x533.jpg',
    atributos: {
      Velocidade: 9,
      Tecnica: 8,
      Solo: 7,
      Feeling: 7
    }
  }),
  (carta14 = {
    nome: 'John 5',
    imagem: 'https://consequence.net/wp-content/uploads/2019/02/john-5.png',
    atributos: {
      Velocidade: 9,
      Tecnica: 8,
      Solo: 7,
      Feeling: 8
    }
  }),
  (carta15 = {
    nome: 'Mark Tremonti',
    imagem:
      'https://celebrity.fm/wp-content/uploads/2021/01/creed-net-worth.jpg',
    atributos: {
      Velocidade: 7,
      Tecnica: 8,
      Solo: 7,
      Feeling: 9
    }
  }),
  (carta16 = {
    nome: 'Dave Mustaine',
    imagem:
      'https://ucsfm.com.br/wp-content/uploads/2018/12/SITE-28-12-M-3-800x445.jpg',
    atributos: {
      Velocidade: 8,
      Tecnica: 9,
      Solo: 8,
      Feeling: 9
    }
  })
]

//console.log(carta1.atributos.ataque) //acessar um objeto dentro de objeto

/*var cartas = [carta1, carta2, carta3];*/
var cartaMaquina = 0
var cartaJogador = 0

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 16)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 16)
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 16)
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
    htmlResultado = "<p class = 'resultado-final'>🎸 Venceu 🎸</p>"
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class = 'resultado-final'>😢 Perdeu 😢</p>"
  } else {
    htmlResultado = "<p class = 'resultado-final'>🪕 Empatou 🪕</p>"
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

function Limpar() {
  document.location.href = ''
}
