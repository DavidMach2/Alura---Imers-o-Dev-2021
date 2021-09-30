const guardarFilmes = []
const guardarNomeFilmes = []

function adicionarFilme() {
  var pegarFilme = document.getElementById('nomefilme').value
  var pegarImagem = document.getElementById('filme').value
  var mostrarImagem = '<img src = ' + pegarImagem + '>'
  var j = 0
  var k = 0
  //Validação de sugestoes repetidas
  for (var i = 0; i < guardarNomeFilmes.length; i++) {
    if (guardarFilmes[i] == pegarImagem || guardarNomeFilmes[i] == pegarFilme) {
      j++
    }
  }
  //Validação de existentes no meu catálogo

  if (pegarImagem == '' || pegarFilme == '') {
    erro.innerHTML =
      'Você precisa preencher os dois campos para inserir o filme'
  } else if (guardarNomeFilmes.length > 149) {
    erro.innerHTML = 'Limite de filmes no Catalogo'
  } else if (j > 0) {
    erro.innerHTML = 'Você ja sugeriu esse filme'
  } else if (pegarImagem.endsWith('.jpg') || pegarImagem.endsWith('.png')) {
    //erro.innerHTML = "<br>";
    guardarNomeFilmes.push(pegarFilme)
    guardarFilmes.push(mostrarImagem)
    indiceFilmes = guardarFilmes.length
    listaFilmes.innerHTML =
      listaFilmes.innerHTML +
      "<p class = 'listagemCatalogo'>" +
      "<p class = 'listaCatalogo'>" +
      indiceFilmes +
      ' - ' +
      pegarFilme +
      "<p class = 'listaCatalogo'>" +
      mostrarImagem
  } else {
    erro.innerHTML = 'Insira um endereço de imagem válido'
  }
  document.getElementById('filme').value = ''
  document.getElementById('nomefilme').value = ''
}

function removerFilme() {
  listaFilmes.innerHTML = ''
  guardarFilmes.length = 0
  guardarNomeFilmes.length = 0
  erro.innerHTML = 'Todos os filmes foram removidos'
}
