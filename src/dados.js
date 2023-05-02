function salvarDados (chave,dado) {
    localStorage.setItem(chave, JSON.stringify(dado))  
}

function recuperarDados (chave) {
    JSON.parse(localStorage.getItem(chave)) 
}