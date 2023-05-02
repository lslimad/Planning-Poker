function copiarLinkConvite() {
    var textoasercopiado = "formandodevs";
    // Copy the text inside the text field
    navigator.clipboard.writeText(textoasercopiado);

    document.getElementById("botaoconvite").innerText = "Copiado!";

    // Alert the copied text
    alert("Copied the text: " + textoasercopiado);
}

function desclicarTodasCartas() {

    var cards = document.getElementsByClassName("cartas");

    for (var i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains("clicked")) {
            cards[i].classList.remove("clicked");
        }
    }
}

function alternar(carta, classname) {
    if (carta.classList.contains(classname)) {
        carta.classList.remove(classname)
    }
    else {
        desclicarTodasCartas();
        carta.classList.add(classname)
    }
}

function votar(numeroCarta,carta,classname) {
    votoAtual = numeroCarta;
    alternar(carta, classname);
}

// Função para fazer a alteração de texto do meu botão amarelo Iniciar/Confirmar/Revelar
const button = document.querySelector("#botao-iniciar");

let estadoBotao = "Iniciar votação";

button.addEventListener("click", function() {

  if (estadoBotao === "Iniciar votação") {
    button.textContent = "Confirmar voto";
    estadoBotao = "Confirmar voto";
  } else if (estadoBotao === "Confirmar voto") {
    confirmarVoto(votoAtual);
    console.log (votoAtual);
    button.textContent = "Revelar média";
    estadoBotao = "Revelar média";
  } else if (estadoBotao === "Revelar média") {
    revelarMedia();
    abrirPopup();
  }
});

function abrirPopup() {
    document.getElementById("pop-up").showModal();
}

function fecharPopup() {
    document.getElementById("pop-up").close();
}


function confirmarVoto(cartaVoto) {
    var votes = recuperarDados("votes");
    if (!votes) {
      votes = [];
    }
    votes.push({nomeJogador:jogadorAtual,voto:cartaVoto});
    salvarDados("votes",votes);
  }
 
function revelarMedia () {
    var votes = recuperarDados ("votes");
    console.log (votes);

}

var votoAtual = 0;

var jogadorAtual = "";