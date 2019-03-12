//get list of edt stored
getEdt();

$(".boton-guardar").click(function () {

    if ($("#preview").val() != "") {

        var alcance = $("#id_reach").val();
        var edt = $("#preview").val();
        var nombre_edt = prompt("Ingrese el nombre del edt");

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
            var response = "";
            var modal = "";

            for (var i in data) {
                response = "<li>" + data[i].nombre +
                "<a class='btn btn-primary' onclick='renderizate(" + data[i].id + ")' data-toggle='modal' data-target='.view" + data[i].id + "'>"+
                '<i class="fa fa-eye"></i> </a>'+
                '<a class="btn btn-danger" data-toggle="modal" data-target="#confirm-delete-edt" data-href="Logic/Scripts/Edt/deleteEdt.php?id=' + data[i].id + '" >'+
                '<i class="fa fa-close"></i> </a>'+
                "</li>";

                modal = '<div class="modal fade bs-example-modal-lg view' + data[i].id + '" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-lg" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                        <div class='center'>
                            <h2>`+data[i].nombre+`</h2>
                            <br>
                            <textarea class="EDTpreview" style="display:none" id="viewEDT` + data[i].id + `" >` + data[i].edt + `</textarea>
                            <div id="graphDiv"></div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">cerrar</button>
                    </div>` +
                    "</div>" +
                    "</div>" +
                    "</div>";
            }
            $("#EDTs").html(response);
            $("body").append(modal);

        },
        error: function (data) {
            console.log(data)
        }
    });
}




var SvgInsert = function (svgCode, bindFunctions) {
    var element = document.querySelector("#graphDiv");
    element.innerHTML = svgCode;
    bindFunctions(element);
};

function renderizate(id) {

    setTimeout(()=>{
    // $(".view" + id).on('show.bs.modal', function (e) {
    var element = document.querySelector("#graphDiv");
    var graph = $("#viewEDT" + id).val();
    mermaidAPI.render('svgChart', graph, SvgInsert, element);
    },200);


}