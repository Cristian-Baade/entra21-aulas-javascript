$("#procurar_pokemon").on("click", () => {

    $.ajax({
        url: encodeURI("https://pokeapi.co/api/v2/pokemon/"+$("#pokemon").val()), 
        type: "get",
        success: (retornar) => {
            console.log("Sla ", retornar);
            $("tbody").append(
                $("<tr>").append(
                    $("<td>", {text: retornar.id}),
                    $("<td>", {text: retornar.name}),
                    $("<td>").append(
                        $("<img>", {src: retornar.sprites.front_default}),
                        $("<img>", {src: retornar.sprites.back_default})
                    )
                )
           
            )

        },
        error: (falha) => {
            console.warn("errado", falha);
        }
    })
})

