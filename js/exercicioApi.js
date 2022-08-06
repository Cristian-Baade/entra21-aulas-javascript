$("#buscar_tipos").on("click", () => {


    $.ajax({
        url: "https://pokeapi.co/api/v2/type/",
        type: "get",
        success: (retorno) => {
            //console.log(retorno.results);
            retorno.results.forEach(item => {

                $("tbody").append(
                    $("<tr>").append(
                        $("<td>", { text: item.name }),
                        $("<td>").append(
                            $("<a>", { class: "btn btn-primary", text: "buscar", href: item.url }),
                            $("<button>", {
                                class: "btn btn-danger",
                                text: "consultar",
                                click: () => {
                                    buscarPorTipo(item.url)
                                }
                            })
                        ),

                    )
                )

            });
        },
        error: (erro) => {
            console.warn(erro);
        }
    })
})

function buscarPorTipo(url) {
    $.ajax({
        url: url,
        type: "get",
        success: (retorno) => {
            console.log("Aqui ó", retorno);
        },
        error: (motivo) => {
            console.warn("Errou aqui", motivo);
        }

    })
}