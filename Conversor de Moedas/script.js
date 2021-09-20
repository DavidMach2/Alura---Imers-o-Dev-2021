function ConverterDolar() {
  var valorEmDolar = parseFloat(document.getElementById('valor').value)
  valorEmReal = valorEmDolar * 5
  console.log(valorEmReal)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O resultado em real eh R$ ' + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido

  ConverterBitcoin()
}

function ConverterEuro() {
  var valorEmEuro = parseFloat(document.getElementById('valor').value)
  valorEmReal = valorEmEuro * 6
  console.log(valorEmReal)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O resultado em real eh R$ ' + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido

  ConverterBitcoin()
}

function ConverterBitcoin() {
  var valorBitcoin = parseFloat(document.getElementById('valor').value)
  valorBitcoin = parseFloat(valorEmReal / 200000)
  var elementoValorConvertido = document.getElementById('valorBitcoin')
  var printBitcoin = 'O resultado em Bitcoin eh ' + valorBitcoin
  elementoValorConvertido.innerHTML = printBitcoin
}

function Limpar() {
  document.getElementById('valor').value = ''
  document.getElementById('valorConvertido').innerHTML = ''
  document.getElementById('valorBitcoin').innerHTML = ''
}
