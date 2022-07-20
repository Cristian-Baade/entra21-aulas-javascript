// procedimento();
// //Essa função esta sendo chamada e não precisa de argumentos
// bemVindo("Cristian");
// bemVindo(true);
// bemVindo(19);
// bemVindo(bemVindo);
// bemVindo(1.72);

// login("Cristian", 123321);
// maiorIdade(19)

// let resultado = maiorIdade(17)
// console.log(resultado);

// console.log(maiorIdade(18));

// let concatenado = maiorIdade(10) + maiorIdade(20)
// console.log(concatenado);

// console.log(calcularMedia(8, 9, 10));

// console.log(verificarSituacao(5));

// console.log(
//     verificarSituacao(
//         calcularMedia(8, 9, 10)
//     )
// );

// function procedimento() {

//     console.log("Esse tipo de função sempre executa da mesma forma, porque não tenho parametros para deixar dinamico");

//     console.warn("Essa função tambem não retorna nada")

// }

// function bemVindo(nome) {
//     console.log(typeof (nome));
//     console.warn("Bem vindo", nome);

// }

// function login(userName, password) {
//     console.error("O usuário " + userName + " cuja a senha é: " + password + " esta indiplente,nao pode entrar");

// }

// function maiorIdade(idade) {
//     if (idade < 18) {
//         return "Menor de idade"

//     } else {
//         return "Maior de idade"
//     }

// }

// function calcularMedia(nota1, nota2, nota3) {
//     return (nota1 + nota2 + nota3)/3

// }

// function verificarSituacao(media) {
//     return media >= 7 ? "Aprovado" : "Reprovado";

// }

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function divisao(a, b) {
    return a / b;
}

function multiplicacao(a, b) {
    return a * b;
}

console.log("Somei esses valores e deu isso:", soma(10, 10));
console.log("Subtrai esses valores e deu isso:", subtracao(10, 10));
console.log("multiplicar esses valores e deu isso:", multiplicacao(10, 10));
console.log("divisao esses valores e deu isso:", divisao(10, 10));