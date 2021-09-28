var listaFilmes = [
  'https://m.media-amazon.com/images/I/910ZuOiYiRL._AC_SL1500_.jpg',
  'https://jovemnerd.com.br/wp-content/uploads/2020/09/attack-on-titan-temporada-final-poster.jpg',
  'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg',
  'https://lumiere-a.akamaihd.net/v1/images/690x0w_br_9e5801a5.jpeg?region=0%2C0%2C690%2C1035'
]

var listaLinks = [
  'https://www.primevideo.com/detail/Mr-Robot/0ND5POOAYD6A4THTH7C1TD3TYE',
  'https://www.crunchyroll.com/pt-br/attack-on-titan',
  'https://www.netflix.com/title/60031226',
  'https://www.disneyplus.com/pt-br/movies/vingadores-ultimato-da-marvel-studios/aRbVJUb2h2Rf'
]

for (var i = 0; i < listaFilmes.length; i++) {
  document.write(
    '<a href = ' +
      listaLinks[i] +
      ' target="_blank"><img src=' +
      listaFilmes[i] +
      '> </a>'
  )
}
