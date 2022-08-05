$("#meu_ip").on("click", function () {

    $.ajax({
        url: "https://httpbin.org/ip",
        type: "get",
        success: function (retorno) {
            console.log("Opa funcionou", retorno);
        },
        error: function (motivo) {
            console.warn("Deu ruim", motivo);
        },
    })
})

$("#eco_get").on("click", function () {

    $.ajax({
        url: encodeURI("https://httpbin.org/get?nome=rubem&aula=javascript com ajax"),
        type: "get",
        success: function (retorno) {
            console.log("Deu certo!!", retorno.args);
        },
        error: function (errouuu) {
            console.warn("Errou", errouuu);
        }

    })
})

$("#delay_get").on("click", () => {
    let numero = $("#tempo").val()

    $.ajax({
        url: encodeURI("https://httpbin.org/delay/" + numero),
        type: "get",
        success: (retorno) => {
            console.log("Demorou+deu certo");
        },
        error: (errado) => {
            console.warn("Deu ruim aqui ow", errado);
        }
    })
})

var objeto = {
    nome: "Cristian",
    email: "schauffertcristian@gmail.com"
}

$("#eco_post").on("click", () => {
    let objeto = {
        nome: $("#nome").val(),
        idade: $("#idade").val()
    }
    console.log("Esse é o objeto", objeto);
    console.log("Esta stringify", JSON.stringify(objeto));
    $.ajax({
        url: "https://httpbin.org/post",
        type: "post",
        headers: {
            'Accept': "application/json",
            'Content-type': "application/json"
        },

        data: JSON.stringify(objeto),
        success: (dados) => {
            console.log("Deu certo essa bagaça!!", dados);
        },
        error: (errou) => {
            console.warn("Errou aqui meu jovem", errou);
        }
    })
})
