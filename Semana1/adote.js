cachorro1  = {  
  nome : "Bolinha",
  idade :10,
  sexo : "Macho",
  porte :"Médio",
  castrado : false,
  anosAbrigo : 1,
  pelagem : ["caramelo" , "branco"]
} 
cachorro2  = {
  nome : "Buzina",
  idade : 5,
  sexo :"Fêmea",
  porte : "Médio",
  castrado : true,
  anosAbrigo : 2,
  pelagem : ["branco" , "preto"]
}

cachorro3  = {
  nome  : "Thor",
  idade : 5,
  sexo : "Macho",
  porte : "Grande",
  castrado : true,
  anosAbrigo : 3,
  pelagem :["caramelo" , "branco"]
}
cachorro4 = {
  nome : "Diego",
  idade : 10,
  sexo : "Macho",
  porte : "Grande",
  castrado : true,
  anosAbrigo : 7,
  pelagem : ["preto" , "branco"]
}

cachorro5  = {
  nome : "Clovis",
  idade : 10,
  sexo : "Macho",
  porte : "Grande",
  castrado : true,
  anosAbrigo : 3,
  pelagem : ["cinza", "caramelo" , "branco"]
} 

cachorro6  = {
  nome : "Rex",
  idade : 10,
  sexo : "Macho",
  porte : "Grande",
  castrado : false,
  anosAbrigo : 2,
  pelagem : ["marrom", "preto"]
} 

cachorrosAdocao= [];

if (cachorro1.castrado){
  cachorrosAdocao.push(cachorro1);
}else{
  //alert(cachorro1.nome + " não foi adicionado.")
}

if (cachorro2.castrado){
  cachorrosAdocao.push(cachorro2)
}else{
  alert(cachorro2.nome + " não foi adicionado.")
}

if (cachorro3.castrado){
  cachorrosAdocao.push(cachorro3)
}else{
  //alert(cachorro3.nome + " não foi adicionado.")
}

if (cachorro4.castrado){
  cachorrosAdocao.push(cachorro4)
}else{
  //alert(cachorro4.nome + " não foi adicionado.")
}

if (cachorro5.castrado){
  cachorrosAdocao.push(cachorro5)
}else{
  //alert(cachorro5.nome + " não foi adicionado.")
}

if (cachorro6.castrado){
  cachorrosAdocao.push(cachorro6)
}else{
  //alert(cachorro6.nome + " não foi adicionado.")
}

//======================LAÇO QUE GUARDA ARRAY DO OBJ EM UMA STRING======================
for(let i in cachorrosAdocao){//var i percorre os indices do array
 cachorrosAdocao[i].pelagem = cachorrosAdocao[i].pelagem.toString()//cachorrosAdocao na posição [i], na posição pelagem guarda o array de pelagem como string
 console.log(cachorrosAdocao[i])
}

//======================FUNÇÃO QUE RECEBE OBJETO COMO PARAM E DEVOLVE STRING COM OS DADOS DO OBJ======================
function recebeObjeto (cachorro){
   return cachorro.anosAbrigo.toString() + '\n' + cachorro.nome + '\n' + cachorro.sexo +'\n' + cachorro.porte + '\n' +cachorro.idade.toString() +'\n' + cachorro.castrado.toString() + '\n' + cachorro.pelagem
}
console.log(recebeObjeto(cachorro2))

//======================FUNÇÃO QUE RECEBE ARRAY DE OBJ E STRING COMO PARAMETRO E RETORNA OBJ COM STRING PASSADA NO PARAMETRO======================
function recebeArrayDeObjetos (arrayDeObjetos, string){
  console.log(arrayDeObjetos)
  console.log(string)
  for(let i in arrayDeObjetos){
    if(arrayDeObjetos[i].nome === string){
      return arrayDeObjetos[i]
    }else{
      alert ('Nenhum item foi encontrado')
    }
  }
}
console.log(recebeArrayDeObjetos(cachorrosAdocao, 'Buzina'))


