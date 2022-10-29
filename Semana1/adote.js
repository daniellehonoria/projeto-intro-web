const cachorro1 = {
  nome: "Bolinha",
  idade: "Idade:" + 10 +' anos',
  sexo: "Sexo: Macho",
  porte: "Porte: Médio",
  castrado: 'Castrado: ' + true,
  anosAbrigo: 'Tempo no abrigo: ' + 1 + ' ano',
  pelagem: 'Cor: ' + ["caramelo", "branco"]
}
const cachorro2 = {
  idade: "Idade:" + 5  +' anos',
  sexo: "Sexo: Fêmea",
  porte: "Porte: Médio",
  castrado: 'Castrado: ' + true,
  anosAbrigo: 'Tempo no abrigo: ' + 2 + ' anos',
  pelagem:  'Cor: ' + ["branco", "preto"]
}

const cachorro3 = {
  idade: "Idade:" + 5 +' anos',
  sexo: "Sexo: Macho",
  porte: "Porte: Grande",
  castrado: 'Castrado: ' + true,
  anosAbrigo: 'Tempo no abrigo: ' + 3 + ' anos',
  pelagem:  'Cor: ' + ["caramelo", "branco"]
}
const cachorro4 = {
  idade: "Idade:" + 10 +' anos',
  sexo: "Sexo: Macho",
  porte: "Porte: Grande",
  castrado: 'Castrado: ' + true,
  anosAbrigo: 'Tempo no abrigo: ' + 7 + ' anos',
  pelagem:  'Cor: ' + ["preto", "branco"]
}
const cachorro5 = {
  idade: "Idade:" + 10 +' anos',
  sexo: "Sexo: Macho",
  porte: "Porte: Grande",
  castrado: 'Castrado: ' + true,
  anosAbrigo: 'Tempo no abrigo: ' + 3 + ' anos',
  pelagem:  'Cor: ' + ["cinza", "caramelo", "branco" +" ´"]
}

const cachorro6 = {
  idade: "Idade:" + 10 +' anos',
  sexo: "Sexo: Macho",
  porte: "Porte: Grande",
  castrado: 'Castrado: ' + true,
  anosAbrigo: 'Tempo no abrigo: ' + 2 + ' anos',
  pelagem:  'Cor: ' + ["marrom", "preto"]
}

cachorrosAdocao = [];

if (cachorro1.castrado) {
  cachorrosAdocao.push(cachorro1);
} else {
  //alert(cachorro1.nome + " não foi adicionado.")
}

if (cachorro2.castrado) {
  cachorrosAdocao.push(cachorro2)
} else {
  // alert(cachorro2.nome + " não foi adicionado.")
}

if (cachorro3.castrado) {
  cachorrosAdocao.push(cachorro3)
} else {
  //alert(cachorro3.nome + " não foi adicionado.")
}

if (cachorro4.castrado) {
  cachorrosAdocao.push(cachorro4)
} else {
  //alert(cachorro4.nome + " não foi adicionado.")
}

if (cachorro5.castrado) {
  cachorrosAdocao.push(cachorro5)
} else {
  //alert(cachorro5.nome + " não foi adicionado.")
}

if (cachorro6.castrado) {
  cachorrosAdocao.push(cachorro6)
} else {
  //alert(cachorro6.nome + " não foi adicionado.")
}

//======================LAÇO QUE GUARDA ARRAY DO OBJ EM UMA STRING======================
for (let i in cachorrosAdocao) {//var i percorre os indices do array
  cachorrosAdocao[i].pelagem = cachorrosAdocao[i].pelagem.toString()//cachorrosAdocao na posição [i], na posição pelagem guarda o array de pelagem como string
 // console.log(cachorrosAdocao[i])
}

//======================FUNÇÃO QUE RECEBE OBJETO COMO PARAM E DEVOLVE STRING COM OS DADOS DO OBJ======================
function recebeObjeto(cachorro) {
  return cachorro.anosAbrigo.toString() + '\n' + cachorro.nome + '\n' + cachorro.sexo + '\n' + cachorro.porte + '\n' + cachorro.idade.toString() + '\n' + cachorro.castrado.toString() + '\n' + cachorro.pelagem
}
console.log(recebeObjeto(cachorro2))

//======================FUNÇÃO QUE RECEBE ARRAY DE OBJ E STRING COMO PARAMETRO E RETORNA OBJ COM STRING PASSADA NO PARAMETRO======================
function recebeArrayDeObjetos(arrayDeObjetos, string) {
  // console.log(arrayDeObjetos)
  //console.log(string)
  for (let i in arrayDeObjetos) {

    if (arrayDeObjetos[i].nome === string) {
      return arrayDeObjetos[i]
    }

  }
  alert('Nenhum item foi encontrado')
}

//console.log(recebeArrayDeObjetos(cachorrosAdocao, 'Buzina'))

//SEMANA 6- DOM


window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    pesquisaCachorro(event)
  }
})
const button = document.querySelector("#send")
button.addEventListener('click', function(e){
  const name = document.querySelector("#name")
  const value = name.value
  pesquisaCachorro(event)
})


arrayDeCachorros=[cachorro1, cachorro2, cachorro3, cachorro4, cachorro5, cachorro6]

function insereCachorro(objeto, id){
for(elemento in objeto){
  const armazenaId= document.getElementById(id)
  const criaLi= document.createElement('li')
  criaLi.innerHTML= objeto[elemento]
  armazenaId.appendChild(criaLi)
}
}
insereCachorro(cachorro1, 'bolinhaID')
insereCachorro(cachorro2, 'buzinaID')
insereCachorro(cachorro3, 'thorID')
insereCachorro(cachorro4, 'diegoID')
insereCachorro(cachorro5, 'clovisID')
insereCachorro(cachorro6, 'rexID')

function pesquisaCachorro(event) {
  event.preventDefault()

const pegaId= document.getElementsByClassName('nomeIgual')
let nameInput = document.getElementById('name').value
nameInput= nameInput.toLowerCase()

if (nameInput.length === 0) {
  alert('Digite um nome válido')
  }else{

    
  
for(let i = 0; i< pegaId.length; i++){
  if (!pegaId[i].innerHTML.toLowerCase().includes(nameInput)){
    pegaId[i].style.display='none'
  }else{
    pegaId[i].style.display='flex'
  }
}
}
}

// function naoEncontrado(){
//   if (nameInput !== cachorro1){
//     alert('Nenhum cachorro com esse nome encontrado')
//     document.querySelector('.input').value=""
//   }
// }