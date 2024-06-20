/*tipagem fraca e dinamica
//se eu não estabelecer qual o tipo, ela pode 
// diferencia maiuscula de minusculas
//criação de variaveis
 Let -> "Let it change" -> variável que pode ter valor alterado
-- const -> variável que não pode ter valor alterado e tem que ser declarado
--var -> variável que pode ou não ter valor alterado
--DOM -> Document-Object Model
let nome = "Ellen" */

//busca elementos pelo nome da tag
//window.document.getElementsByTagName(label) pega todas as label pois o get elements está no plural

//busca elementos pelo id

let nome = document.querySelector("#nome")
let email = document.querySelector("#email")

console.log(nome);
console.log(email);

//Função no JS == métodos no java

function validaNome() {
 console.log(nome.value.length)
 if (nome.value.length >= 3){
 nome.style.borderColor = "green"
}else {
 nome.style.borderColor = "red"
}
}