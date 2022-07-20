console.warn("READ");

let leitura = document.getElementById("paragrafo_ler");

console.log(leitura);
console.log("Apenas o conteudo ou textContent", leitura.textContent);
console.log("Apenas o conteudo + elementos internos com HTML ", leitura.innerHTML);

let aprendendo_leitura = document.getElementById("test_1");

console.log(aprendendo_leitura.textContent);
console.log(aprendendo_leitura.innerHTML);

console.warn("READ MORE");
let paragrafos = [...document.getElementsByTagName("p")]
console.log("Lendo todos os paragrafos", paragrafos);

paragrafos.forEach(paragrafo => {
    console.log(paragrafo.innerHTML);
});

console.warn("write");
let escrita = document.getElementById("paragrafo_escrever");
escrita.href = "www"
escrita.textContent = "Esse paragrafo foi escrito com javascript"

document.getElementById("ta_aqui").textContent = "Botão alterado com javascript";

console.warn("Texto");
let textao = document.getElementById("alterar_1")
textao.href = "Pensa em um texto muito foda aqui";
textao.textContent = "Olha o texto mano slk"

let textao_2 = document.getElementById("alterar_2")
textao_2.href = "Lets go texto mudado"
textao_2.textContent = "Olha o textinhozinhoinho"



function mudarTexto(conteudo){
    let elemento = document.getElementById("qualquer");
 
    elemento.title = conteudo;
    elemento.textContent = conteudo;
}

function addConteudo(conteudo){
let enter = document.createElement("br")

document.body.append()

let elemento = document.createElement("div")
elemento.textContent = conteudo;

document.body.append(elemento);


}