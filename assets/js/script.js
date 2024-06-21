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

const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const assunto = document.querySelector('#assunto');
const mapa = document.querySelector('#mapa')

let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

//  console.log(nome);
//  console.log(email)

//  Funções no JS === Metodos Java

// public void validaNome() {}

function validaNome() {
  let txtNome = document.querySelector("#txtNome")

  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome muito curto"
    txtNome.style.color = "red"
    nomeOk = false
  } else {
    txtNome.innerHTML = 'Nome ok'
    txtNome.style.color = "green"
    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')
  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = "red"
    emailOk = false
  } else {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
  }
}

function validaEmail2() {
  // criação do padrão de email, vai aceitar caracteres + @ + caracteres + . + 2 ou 3 caracteres pra finalizar
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let txtEmail = document.querySelector('#txtEmail')

  // o if será feito de uma forma diferente, verificando se o que a pessoa digitou condiz com o padrão do e-mail (match)
  // caso de certo, e-mail válido, senão, e-mail inválido
  if(email.value.match(regex)) {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
  } else {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = "red"
    emailOk = false
  }
}

function validaAssunto() {
  let txtMsg = document.querySelector('#txtAssunto')
  
  if(assunto.value.length > 100) {
    txtMsg.innerHTML = "Assunto deve ter no máximo 100 caracteres."
    txtMsg.style.color = '#d90429'
    mensagemOk = false
  } else {
    txtMsg.innerHTML = assunto.value.length + '/100'
    txtMsg.style.color = '#2b2d42'
    mensagemOk = true
  }
}

function enviarForm(){

  if(nomeOk  && emailOk  && mensagemOk ) {
    alert(nome.value + ', mensagem enviada com sucesso, em breve entraremos em contato por e-mail.')
  } else {
    alert("Por favor, preencha todos os campos corretamente.")
  }
}

function mapaZoom() {
  mapa.style.aspectRatio = '16/11'
}

function mapaNormal() {
  mapa.style.aspectRatio = '16/9'
}