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