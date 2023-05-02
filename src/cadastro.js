function criarSala (nomeJogador) {
    var jogadores = [];
    jogadores.push(nomeJogador);
    console.log ("teste");
    salvarDados("jogadores",jogadores);
    jogadorAtual = nomeJogador;
    salvarDados ("votes",[]);
}