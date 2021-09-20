function Calcular() {
  var nome = document.getElementById('nome').value
  var n1 = parseFloat(document.getElementById('nota1').value)
  var n2 = parseFloat(document.getElementById('nota1').value)
  var n3 = parseFloat(document.getElementById('nota1').value)
  var n4 = parseFloat(document.getElementById('nota1').value)

  var NotaFinal = (n1 + n2 + n3 + n4) / 4

  var notaFixada = NotaFinal.toFixed(1)

  console.log(NotaFinal)

  var printmedia = document.getElementById('resultado')
  printmedia.innerHTML = 'Olá ' + nome + ' a sua média final é ' + NotaFinal

  if (NotaFinal >= 7) {
    msg.innerHTML = 'Parabéns, você foi Aprovado!'
  } else {
    msg.innerHTML = 'Se esforce mais! Você foi reprovado!'
  }
}

function Limpar() {
  document.getElementById('nome').value = ''
  document.getElementById('nota1').value = ''
  document.getElementById('nota2').value = ''
  document.getElementById('nota3').value = ''
  document.getElementById('nota4').value = ''
  document.getElementById('resultado').innerHTML = ''
  document.getElementById('msg').innerHTML = ''
}

/*var nome = "David";
var notaPrimeiroBi = 9;
var notaSegundoBi = 7;
var notaTerceiroBi = 4;
var notaQuartoBi = 2;

var notaFinal =
  (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

// fixar o numero de casas decimais em 1
var notaFixada = notaFinal.toFixed(1);

console.log("Bem vindo " + nome);
console.log("Sua nota final é: " + notaFixada);

if (notaFixada > 6) console.log("Parabens, passou de ano!");
else console.log("Que pena, não passou de ano!");*/

/* 
Revisão
1- Variaveis
2- Strigs
3- Console.log
4- toFixed
5- Operações
6- Concatenação
*/
