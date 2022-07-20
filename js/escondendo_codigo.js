// console.log("Hello World");//O console aceita parametros para exibir em log
// console.log("Meu nome é Cristian e tenho " + 19 + " anos de idade");//É possivel concatenar textos e variaveis igual ao java
// console.log("Cristian", 19, "anos");// O console aceita infinitos parametros basta separar com virgula

// let nome = "Cristian";//let cria uma variavel com escopo limitado
// var sobrenome = "Schauffert"; //var cria uma variavel que continua existindo mesmo depois do escopo

// console.log(nome);
// console.log("Meu nome é " + nome);
// console.log("Meu nome é", nome);
// console.log('Meu nome é ' + nome + ' mas me chamam tambem de \'Alex\'');
// console.log(`Meu nome é ${nome}`);
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = 10;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = false;
// console.log("No momento nome é do tipo " + typeof (nome));
// nome = "";
// console.log("No momento nome é do tipo " + typeof (nome));
// let idade = 19;
// let altura = 1.72;
// console.log(`A variavel idade é do tipo ${typeof (idade)} e a variavel altura é do tipo ${typeof (altura)}`);
// //let mensagem = prompt("O que voce esta pensando?")
// //let interromper = prompt("Estou interronpendo?")
// //console.log("Voce esta pensando "+mensagem);
// //console.log("A informação capturada é do tipo " +typeof(mensagem));

// console.log("Os operadores aritmeticos são os mesmos do JAVA +,-,*,/,%");
// console.log("Somando " + (1 + 2));
// console.log("Subtraindo " + (1 - 2));
// console.log("Multiplicando " + (1 * 2));
// console.log("Dividindo " + (10 / 2));

// if (idade < 18) {
//     console.log("É menor de idade");

// } else {
//     console.log("É maior de idade");
// }

// if(altura<1.5){
//     console.log("Baixinho");
// }else if(altura<1.7) {
// console.log("Mais ou menos");
// }else if(altura<1.9){
//     console.log("Altinho");
// }else{
//     "Prédio 10 andar com ar condicionado"
// }

// let resposta=(altura<2?"Normal":"Predio")

// switch(idade){
//     case 1:
//         console.log("Um aninho");
//         break;

//         case 2:
//             console.log("Dois aninhos");
// break;

// default:
//     console.log("Chega cabo a graça fih");
//     break;


// }

let nome= prompt("Qual seu nome?");
let idade= prompt("Qual sua idade?");

let lugar= prompt("Onde voce mora??");
console.log("Bom dia, Sr "+nome+", voce tem "+idade+" e mora em "+lugar+" certo??" );
