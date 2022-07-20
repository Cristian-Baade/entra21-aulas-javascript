function definirArray() {
    console.log("Para cirar uma Array basta let nome = []");
    console.log("Para criar uma Array com itens basta let nome = [5,13,2]");
    let listaVazia = [];
    console.log(listaVazia);
    let nomes = ["Cristian", "Kalil", "Mateus", "Bruno"]
    console.log(nomes);
}

definirArray();

function alertar(mensagem) {
    alert(mensagem)
}
var lista = ["Cristian", "cristian", "Cricri", "Keke"];
function inserirArray(novoNome) {
    lista.push(novoNome)
    console.log(lista);
}

function listarFor() {
    for (let contador = 0; contador < lista.length; contador++) {
        console.log("Repetindo com for o indice " + contador + "=" + lista[contador]);
    }
    console.log("------");

    for (const item of lista) {
        console.log("Repetindo com For inteligente, sem contar o indice " + item);
    }
    console.log("------------");

    lista.forEach(item => {
        console.log("Repetindo com Foreach sem contar indice " + item);
    });
}

