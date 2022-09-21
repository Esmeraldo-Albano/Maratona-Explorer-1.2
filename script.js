const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const resposta = [
  "Certaza!",
  "Não tenho tanta certeaza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu verm sim.",
  "Minhas fontes dizem não.",
  "Provavelmente",
  "Não é possivel prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]



// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

    // gerar numero aleatorio
  const totalResposta = resposta.length
  const numeroAleatorio = Math.floor(Math.random() * totalResposta)

elementoResposta.innerHTML = pergunta + resposta[numeroAleatorio]

elementoResposta.style.opacity = 1;
// Sumir a resposta depos de 5 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 5000)
  }
