/*1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. 
Vamos usar estas características para definir exemplos destes objetos usando o código.
Você precisará criar pelo menos=  * uma característica String;   * uma característica Number;   * uma característica Boolean;

2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. 
Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

5. Crie pelo menos mais uma característica para o item que você criou. 
Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.*/

  //1&2&5--------------------------------------VARIÁVEIS----------------------------------------------

let nome1 = "Thor"
let idade1= 5
let sexo1= "Macho"
let porte1= "Grande"
let castrado1= true
let anosAbrigo1= 3
let pelagem1=["caramelo" , "branco"]
//https=//ilm.org.br/adote/tproduct/326151795-991977933711-adote-o-thor

let nome2= "Rex"
let idade2= 10
let sexo2= "Macho"
let porte2= "Grande"
let castrado2= false
let anosAbrigo2= 2
let pelagem2= ["marrom", "preto"]
//https=//ilm.org.br/adote/tproduct/326151795-951394079561-adote-o-rex

let nome3= "Clovis"
let idade3= 10
let sexo3= "Macho"
let porte3= "Grande"
let castrado3= true
let anosAbrigo3= 3
let pelagem3= ["cinza", "caramelo" , "branco"]
//https=//ilm.org.br/adote/tproduct/326151795-611270560251-adote-clvis

let nome4= "Diego"
let idade4= 10
let sexo4= "Macho"
let porte4= "Grande"
let castrado4= true
let anosAbrigo4= 7
let pelagem4= ["preto" , "branco"]
//https=//ilm.org.br/adote/tproduct/326151795-259044191611-adote-o-diego

let nome5= "Buzina"
let idade5= 5
let sexo5="Fêmea"
let porte5= "Médio"
let castrado5= true
let anosAbrigo5= 2 
let pelagem5= ["branco" , "preto"]
//https=//ilm.org.br/adote/tproduct/326151795-345284919221-adote-a-buzina

let nome6= "Bolinha"
let idade6=10
let sexo6= "Macho"
let porte6="Médio"
let castrado6= true
let anosAbrigo6= 1
let pelagem6= ["caramelo" , "branco"]
//https=//ilm.org.br/adote/tproduct/326151795-199824655111-adote-o-bolinha

/*3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
💡A média deve ser igual à soma dos itens, dividida pelo total de itens.*/

const mediaAnosAbrigo= (anosAbrigo1 + anosAbrigo2 + anosAbrigo3 + anosAbrigo4 + anosAbrigo5 + anosAbrigo6)/6
console.log("A média de tempo em que os cachorros estão no abrigo é de " + mediaAnosAbrigo + " anos.")

//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
const castrados = castrado1 && castrado2 && castrado3 && castrado4 && castrado5 && castrado6
console.log(castrados)


/*6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.*/

  console.log(`Nome: ${ nome1. toUpperCase()}, Idade: ${idade1}, Sexo: ${sexo1}, Porte: ${porte1}, Castrado: ${castrado1}, Tempo no abrigo: ${anosAbrigo1}, Pelagem: ${pelagem1}`)
  console.log(`Nome: ${ nome2. toUpperCase()}, Idade: ${idade2}, Sexo: ${sexo2}, Porte: ${porte2}, Castrado: ${castrado2}, Tempo no abrigo: ${anosAbrigo2}, Pelagem: ${pelagem2}`)
  console.log(`Nome: ${ nome3. toUpperCase()}, Idade: ${idade3}, Sexo: ${sexo3}, Porte: ${porte3}, Castrado: ${castrado3}, Tempo no abrigo: ${anosAbrigo3}, Pelagem: ${pelagem3}`)
  console.log(`Nome: ${ nome4. toUpperCase()}, Idade: ${idade4}, Sexo: ${sexo4}, Porte: ${porte4}, Castrado: ${castrado4}, Tempo no abrigo: ${anosAbrigo4}, Pelagem: ${pelagem4}`)
  console.log(`Nome: ${ nome5. toUpperCase()}, Idade: ${idade5}, Sexo: ${sexo5}, Porte: ${porte5}, Castrado: ${castrado5}, Tempo no abrigo: ${anosAbrigo5}, Pelagem: ${pelagem5}`)
  console.log(`Nome: ${ nome6. toUpperCase()}, Idade: ${idade6}, Sexo: ${sexo6}, Porte: ${porte6}, Castrado: ${castrado6}, Tempo no abrigo: ${anosAbrigo6}, Pelagem: ${pelagem6}`)



