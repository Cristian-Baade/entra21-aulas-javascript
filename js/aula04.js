console.group("Ler conteudos com jQuery")
console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());

console.groupEnd()

console.group("Alterar conteudos com jQuery")
$("#paragrafo_2").text("Conteudo escrito com jQuerry")
console.log($("#paragrafo_2").text());
console.groupEnd()

console.group("Ler Varios conteudos com jQuery")
let lista = $("p")
console.log(lista);
console.log(lista.text());

$("p").each(function () {
    console.log(this.textContent);
})

console.groupEnd()

console.group("Escrever varios conteudos com jQuery")
$("li").text("li escrito com jQuery")

console.groupEnd()

console.group("Criar elementos com jQuery")
$("<button>", {
    text: "Clique aqui!", class: "btn btn-primary"
}).appendTo("body")

$("body").append(
    $("<br>"),


    $("<b>", {
        text: "Texto Negrito"

    }),

    $("<br>"),

    $("<i>", { text: "Text TEXTOBOM" })
)

console.groupEnd()

console.group('More itens jQuery')
$("<ul>").append(
    $("<li>", { text: "Item um" }),
    $("<li>", { text: "Item dois" }),
    $("<li>", { text: "Item tres" })
).appendTo("body")


console.groupEnd();

console.log('====================================================================')
console.group(`Exercise writen more iten`)

$("<table>", { class: "table table-dark" }).append(
    $("<Thead>", { class: "bg-dark" }).append(
        $("<th>", { text: "Nome" }),
        $("<th>", { text: "Idade" }),
        $("<th>", { text: "Cidade" })
    ),
    $("<Tbody>").append(
        $("<tr>").append(
            $("<td>", { text: "Fulano" }),
            $("<td>", { text: "19" }),
            $("<td>", { text: "Otacilio" }),
        ),
        $("<tr>").append(
            $("<td>", { text: "Ciclano" }),
            $("<td>", { text: "20" }),
            $("<td>", { text: "Blumenau" }),
        )
    )
).appendTo("body")
console.groupEnd()

console.group('Criar eventos em qualquer lugar');
$("p").on("click", function () {
    alert("Opa!")
})

$("li").on("click", function () {
    console.warn("Opa,opa");
})

$("#ok").on("click", function () {
    alert("Ta tudo bem ai?")
})
console.groupEnd();


console.group('Exercicio jQuery');
$("#add").on("click", function () {
    $("<p>", {
        text: "Estou aqui", class: "alert alert-danger"
    }).appendTo("body")
}),
    $("#limpar").on("click", function () {
        $(".alert").remove()
    })

console.groupEnd();