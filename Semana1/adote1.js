cachorro1  = {
  nome  : "Thor",
  idade : 5,
  sexo : "Macho",
  porte : "Grande",
  castrado : true,
  anosAbrigo : 3,
  pelagem :["caramelo" , "branco"]
} //  ilm.org.br/adote/tproduct/326151795-991977933711-adote-o-thor
cachorro2  = {
  nome : "Rex",
  idade : 10,
  sexo : "Macho",
  porte : "Grande",
  castrado : false,
  anosAbrigo : 2,
  pelagem : ["marrom", "preto"]
} //  ilm.org.br/adote/tproduct/326151795-951394079561-adote-o-rex

cachorro3  = {
  nome : "Clovis",
  idade : 10,
  sexo : "Macho",
  porte : "Grande",
  castrado : true,
  anosAbrigo : 3,
  pelagem : ["cinza", "caramelo" , "branco"]
} //  ilm.org.br/adote/tproduct/326151795-611270560251-adote-clvis
cachorro4 = {
  nome : "Diego",
  idade : 10,
  sexo : "Macho",
  porte : "Grande",
  castrado : true,
  anosAbrigo : 7,
  pelagem : ["preto" , "branco"]
} //  ilm.org.br/adote/tproduct/326151795-259044191611-adote-o-diego

cachorro5  = {
  nome : "Buzina",
  idade : 5,
  sexo :"Fêmea",
  porte : "Médio",
  castrado : true,
  anosAbrigo : 2,
  pelagem : ["branco" , "preto"]
} //  ilm.org.br/adote/tproduct/326151795-345284919221-adote-a-buzina

cachorro6  = {
  nome : "Bolinha",
  idade :10,
  sexo : "Macho",
  porte :"Médio",
  castrado : false,
  anosAbrigo : 1,
  pelagem : ["caramelo" , "branco"]
} //  ilm.org.br/adote/tproduct/326151795-199824655111-adote-o-bolinha

cachorrosAdocao= [];

if (cachorro1.castrado){
  cachorrosAdocao.push(cachorro1);
}else{
  alert(cachorro1.nome + " não foi adicionado.")
}

if (cachorro2.castrado){
  cachorrosAdocao.push(cachorro2)
}else{
  alert(cachorro2.nome + " não foi adicionado.")
}

if (cachorro3.castrado){
  cachorrosAdocao.push(cachorro3)
}else{
  alert(cachorro3.nome + " não foi adicionado.")
}

if (cachorro4.castrado){
  cachorrosAdocao.push(cachorro4)
}else{
  alert(cachorro4.nome + " não foi adicionado.")
}

if (cachorro5.castrado){
  cachorrosAdocao.push(cachorro5)
}else{
  alert(cachorro5.nome + " não foi adicionado.")
}

if (cachorro6.castrado){
  cachorrosAdocao.push(cachorro6)
}else{
  alert(cachorro6.nome + " não foi adicionado.")
}

/*1. Reescrevendo o relatório criado utilizando console.log() q começamos na semana 2, altere a forma que a característicade array dos itens seja escrita como um laço q guarde todos os valores da
 propriedade array do obj em uma mesma string. Utilize esta string  no relatório. Chamamos este processo de reescrever um código já escrito, de refatoração.*/

/*2. Ainda no relatório, altere-o para q ele seja criado utilizando laços. Ou seja, você ñ deve mais imprimir individualmente cada item do relatório. Cada item deve ser 
exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.*/
for(let i in cachorrosAdocao){//var i percorre os indices do array
 cachorrosAdocao[i].pelagem = cachorrosAdocao[i].pelagem.toString()//cachorrosAdocao na posição [i], na posição pelagem guarda o array de pelagem como string
 console.log(cachorrosAdocao[i])
}
/*3. Crie uma função que receba como parâmetro um objeto, 
e devolva a string do relatório com os dados do objeto. */
function recebeObjeto (cachorro){
   return cachorro.anosAbrigo.toString() + '\n' + cachorro.nome + '\n' + cachorro.sexo +'\n' + cachorro.porte + '\n' +cachorro.idade.toString() +'\n' + cachorro.castrado.toString() + '\n' + cachorro.pelagem
}
console.log(recebeObjeto(cachorro1))

/*4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas 
os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi 
encontrado. */

function recebeArrayDeObjetos (arrayDeObjetos, string){
  for(let i in arrayDeObjetos){
    if(arrayDeObjetos[i].nome === string){
      return arrayDeObjetos[i]
    }
  }
  return 'Nenhum item foi encontrado'
}
console.log(recebeArrayDeObjetos(cachorrosAdocao, 'Bolinha'))