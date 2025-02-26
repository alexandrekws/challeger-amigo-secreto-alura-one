//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];
let amigoSecreto = sorteioAmigoSecreto();

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    let validacaoNome = /\d/;
    
    if (listaDeNomes.includes(nomeAmigo)){
        alert("Nome já adicionado a lista.");
        limparCampo();
    } else if (nomeAmigo == "" || validacaoNome.test(nomeAmigo)) {
        alert('Por favor, preencha um nome válido');
        limparCampo();
    } else {
        listaDeNomes.push(nomeAmigo);
        exibirTextoNaTela('listaAmigos', listaDeNomes.map(nome => `<li>${nome}</li>`).join(''));
        limparCampo();
    }
}

function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function sortearAmigo() {
    let quantidadeMaxima = listaDeNomes.length;
    let sorteado = parseInt(Math.random() * quantidadeMaxima);

    mensagemSorteio = `O amigo secreto sorteado é: ${listaDeNomes[sorteado]}.`;

    exibirTextoNaTela('resultado', mensagemSorteio);
    exibirTextoNaTela('listaAmigos', '');
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}
