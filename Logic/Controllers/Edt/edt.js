//get list of edt stored
getEdt();

$(".boton-guardar").click(function () {

    if ($("#preview").val() != "") {

        var alcance = $("#id_reach").val();
        var edt = $("#preview").val();
        var nombre_edt = prompt("Ingrese el codigo del edt");

        if (alcance != "") {
            $.ajax({
                url: 'Logic/Scripts/Edt/addEdt.php',
                type: "POST",
                dataType: "html",
                data: {
                    id_alcance: alcance,
                    nombre_edt: nombre_edt,
                    edt: edt
                },
                success: function (data) {
                    console.log(data)
                    if (data == "do_it") {
                        alert("EDT guardado !!");
                        getEdt();
                    }
                },
                error: function (data) {
                    console.log(data)
                }
            });
        } else {
            alert("Ingrese el alcance antes de llenar el EDT");
        }
    } else {
        alert("El diagrama está vacío");
    }

});

function getEdt() {
    var alcance = $("#id_reach").val();
    $.ajax({
        url: "Logic/Scripts/Edt/EdtJSON.php",
        type: "POST",
        dataType: "json",
        data: {
            id_alcance: alcance
        },
        success: function (data) {
            console.log(data)
            var response = "";
            var modal = "";

            $("#EDTs").html(response);


        },
        error: function (data) {
            console.log(data)
        }
    });
}




var element;

function renderizate(id) {

    setTimeout(() => {
        // $(".view" + id).on('show.bs.modal', function (e) {
        element = document.querySelector("#graphDiv" + id);
        var graph = $("#viewEDT" + id).val();
        console.log(mermaid.parse(graph))
        mermaidAPI.render('svgChart', graph, SvgInsert, element);
        mermaid.parseError = function (err, hash) {
            console.log(err);
        };
    }, 200);
}

var SvgInsert = function (svgCode, bindFunctions) {
    element.innerHTML = svgCode;
};


function modalviewEdt(id, nombre, edt) {
    modal = '<div class="modal fade bs-example-modal-lg view' + id + '" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
        '<div class="modal-dialog modal-lg" role="document">' +
        '<div class="modal-content">' +
        `<div class="modal-body">
        <div class='center'>
            <h2>` + nombre + `</h2>
            <br>
            <textarea class="mermaid EDTpreview" style="dislay:none" id="viewEDT` + id + `" >` + edt + `</textarea>
            <div id="graphDiv` + id + `"></div>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">cerrar</button>
    </div>` +
        "</div>" +
        "</div>" +
        "</div>";
    if ($(".modal").hasClass("view" + id)) {
        $(".view" + id).modal("show");
    } else {
        $("body").append(modal);
        $(".view" + id).modal("show");
        setTimeout(() => {
            renderizate(id);
        }, 100)
    }

}