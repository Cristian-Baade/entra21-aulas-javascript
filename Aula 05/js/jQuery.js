$("body").attr("class", "container-fluid mt-2")

$("<header>", { class: "row mb-4" }).append(
    $("<section>", { class: "col" }).append(
        $("<div>", { class: "card" }).append(
            $("<div>", { class: "card-body" }).append(
                $("<h1>", { text: "Pagina Atual" })
            )
        )
    )
).appendTo("body")
$("body").append(
    $("<section>", {class:"row"}).append(
        $("<aside>", { class: "col-3" }).append(
            $("<nav>").append(
                $("<div>", { class: "card" }).append(
                    $("<div>", { class: "card-body" }).append(
                        $("<li>",).append(
                            $("<a>", { class:"btn btn-outline-success",href: "/Inicial.html", text: "Pagina Inicial" })
        
                        ),
                        $("<li>").append(
                            $("<a>", { class:"btn btn-outline-success",href: "/diferente.html", text: "Pagina Diferente" })
                        )
                       
                    )
                )
            )
        ),
        $("<main>", {class:"col"}).append(
            $("<div>", {class:"card"}).append(
                $("<div>", {class:"card-header", text:"Bem vindo a minha pagina!!"}),
                $("<div>", {class:"card-body"}).append(
                    $("<table>", {class:"table table-bordered"}).append(
                        $("<thead>").append(
                            $("<th>", {text:"nome"}),
                            $("<th>", {text:"idade"}),
                            $("<th>", {text:"cidade"}),
                            
                        ),
                        $("<tbody>").append(
                            $("<tr>").append(
                                $("<td>", {text:"Cristian"}),
                                $("<td>", {text:"19"}),
                                $("<td>", {text:"Otacilio Costa"}),
                            ),
                            $("<tr>").append(
                                $("<td>", {text:"Ciclano"}),
                                $("<td>", {text:"23"}),
                                $("<td>", {text:"Ibituba"}),
                            )
                        )
                    )
        
                ),
                $("<div>", {class:"card-footer", text:"Copyright©2022-20XX,Cristian Schauffert"})
            )
        )
    )
).appendTo("body")



