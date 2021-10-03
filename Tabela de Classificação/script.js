// {} para criar objetos
var rafa = {
  nome: 'Rafa',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  image: 'https://pbs.twimg.com/profile_images/1358586934822658048/1VEg3xvO.jpg'
}

var paulo = {
  nome: 'Paulo',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  image: 'https://s3.us-east-1.amazonaws.com/jarvis-caelum/paulo-silveira.png'
}

var gui = {
  nome: 'Gui',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  image:
    'https://www.alura.com.br/assets/img/imersoes/instrutores/guilherme_lima.1616501197.jpg'
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates
  return pontos
}

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)
gui.pontos = calculaPontos(gui)

var jogadores = [rafa, paulo, gui]

// += é para quando soma o elemento = elemento + qqr coisa
function exibeJogadoresNaTela() {
  var elemento = ''
  for (var i = 0; i < jogadores.length; i++) {
    elemento += '<tr><td>' + jogadores[i].nome + '</td>'
    elemento +=
      '<tr><td>' +
      "<img class='imagem_jogadores' src=" +
      jogadores[i].image +
      '> </td>'
    elemento += '<td>' + jogadores[i].vitorias + '</td>'
    elemento += '<td>' + jogadores[i].empates + '</td>'
    elemento += '<td>' + jogadores[i].derrotas + '</td>'
    elemento += '<td>' + jogadores[i].pontos + '</td>'
    elemento +=
      "<td><button id = 'vitoria' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>"
    elemento +=
      "<td><button id='empate' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>"
    /*elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";*/
    elemento += '</tr>'
  }
  var tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
  jogadores[i].vitorias++
  for (var j = 0; j < jogadores.length; j++) {
    if (jogadores[j] != jogadores[i]) {
      jogadores[j].derrotas++
    }
  }
  jogadores[i].pontos = calculaPontos(jogadores[i])
  exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].empates++
    jogadores[i].pontos = calculaPontos(jogadores[i])
    exibeJogadoresNaTela(jogadores)
  }
  exibeJogadoresNaTela(jogadores)
}

/*adicionar derrota não faz sentido pq se eu add uma derrota como saberei quem ganhou se somente 1 ganha, então não teria como calcular pros demais participantes*/
/*function adicionarDerrota(i) {
  jogadores[i].derrotas++;
  jogadores[i].pontos = calculaPontos(jogadores[i]);
  exibeJogadoresNaTela(jogadores);
}*/

function Limpar(i) {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0
    jogadores[i].derrotas = 0
    jogadores[i].empates = 0
    jogadores[i].pontos = 0
  }
  exibeJogadoresNaTela(jogadores)
}

function adicionarJogador() {
  var novoJogador = {
    nome: document.getElementById('nomeJogador').value,
    image: document.getElementById('imagemJogador').value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  jogadores.push(novoJogador)
  exibeJogadoresNaTela(jogadores)
  document.getElementById('nomeJogador').value = ''
  document.getElementById('imagemJogador').value = ''
  document.getElementById('error').innerHTML = ''
}

function removerJogador() {
  var nome = document.getElementById('nomeJogador').value
  var jogadorExcluido = jogadores.findIndex(i => i.nome === nome)

  if (jogadorExcluido < 0) {
    document.getElementById('error').innerHTML = '<br>Nome não localizado!'
  } else {
    jogadores.splice(jogadorExcluido, 1)
    exibeJogadoresNaTela(jogadores)
    document.getElementById('nomeJogador').value = ''
    document.getElementById('error').innerHTML = '<br>Deletado com sucesso!'
  }
}
