$(document).ready(function(){
    deliverableList()
})
function sendDeliverable() {
    var nombre_entregable = $("#nombre_entregable").val();
    var criterio_entregable = $("#criterio_entregable").val();
    $.ajax({
        url: "Logic/Scripts/Deliverable/addDeliverable.php",
        type: "POST",
        data: {
            nombre_entregable: nombre_entregable,
            id_proyecto : localStorage.proyecto,
            criterio_entregable: criterio_entregable
        },
        dataType: "html",
        success: function (data) {
            if (data == "do_it") {
                var modal =
                    '<div class="modal fade bs-example-modal-sm deliverable" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Entregable Guardado
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">cerrar</button>
                        </div>` +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $("body").append(modal);
                $(".deliverable").modal();
            }
            $("#nombre_entregable").val("");
            $("#criterio_entregable").val("");
            deliverableList();
        }
    });
}

function deliverableList() {
    $.ajax({
        url: "Logic/Scripts/Deliverable/DeliverableJSON.php",
        type: "POST",
        dataType: "json",
        data:{
            id_proyecto : localStorage.proyecto
        },
        success: function (data) {
            var response = "";

            for (var i in data) {
                response +=
                    "<tr>" +
                    "<td>" +
                    data[i].nombre +
                    "</td>" +
                    "<td>" +
                    data[i].estado +
                    "</td>" +
                    '<td> <button class="btn btn-primary" onclick="editDeliverable(' +
                    data[i].id +
                    ')"><i class="fa fa-pencil"></i></button>'+
                    ' <button class="btn btn-danger" data-toggle="modal" data-target="#confirm-delete" data-href="Logic/Scripts/Deliverable/deleteDeliverable.php?id=' + data[i].id + '"><i class="fa fa-close"></i></button>' +
                    "</td>" +
                    "</tr>";
            }
            if (response == "") {
                response = '<tr><td colspan="5"><strong>No hay Entregables agregados</strong></td></tr>';
            }
            $("#entregable_list").html(response);
        }
    });
}

function editDeliverable(id) {
    $.ajax({
        url: "Logic/Scripts/Deliverable/getDeliverable.php",
        type: "POST",
        dataType: "json",
        data: {
            id: id,
            id_proyecto : localStorage.proyecto
        },
        success: function (data) {
            var modalEdit = "";
            modalEdit += `<div class="modal fade" id="modalEditDeliverable` + id + `" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">Editar Entregable</h4>
                        </div>
                        <div class="modal-body">
                        <div class="row">
                        <div class="col-sm-8">
                        <form class="validate-form1" method="POST" onsubmit="return updateDeliverable(` + id + `)">
                        <input type="hidden" class="form-control" name="id_Deliverable` + id + `" id="id_Deliverable` + id + `" value="` + id + `">
                            <h4>
                                <strong>Nombre del Entregable
                                    <span></span>
                                </strong>
                            </h4>
                            <input type="text" class="form-control" name="nombre_deliverable` + id + `" id="nombre_deliverable` + id + `" placeholder="Nombre del Entregable"
                               value="` + data[0].nombre + `" required>
                            <br>
                            <h4>
                                <strong>Descripción del Entregable
                                    <span></span>
                                </strong>
                            </h4>
                            <textarea class="form-control" name="criterio_aceptacion_deliverable` + id + `" id="criterio_aceptacion_deliverable` + id + `" placeholder="Descripción del Requisito" required>` + data[0].criterio_aceptacion + `</textarea>
                                <br>
                                <select class="form-control" name="estado_deliverable` + id + `" id="estado_deliverable` + id + `" required>`;
            if (data[0].estado == "En_proceso") {
                modalEdit += '<option value="En_proceso" selected>En proceso</option>' +
                    '<option value="Hecho">Hecho</option>' +
                    '<option value="En_correccion">En corrección</option>';
            } else if (data[0].estado == "Hecho") {
                modalEdit += ' <option value="En_proceso">En proceso</option>' +
                    '<option value="Hecho" selected>Hecho</option>' +
                    '<option value="En_correccion">En corrección</option>';
            } else if (data[0].estado == "En_correccion") {
                modalEdit += '<option value="En_proceso">En proceso</option>' +
                    '<option value="Hecho">Hecho</option>' +
                    '<option value="En_correccion" selected>En corrección</option>';
            }
            modalEdit += `</select>
                                <br>
                                <button class="btn btn-primary btn-block" type="submit" id="updateDeliverable" onsubmit="return updateDeliverable(` + id + `)">
                                    <i class="fa fa-save"> Actualizar entregable</i>
                                </button>
                            </form>
                        </div>
                        </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->
                    </div>`;
            $("body").append(modalEdit);
            $("#modalEditDeliverable" + id).modal("show");
        }
    });
}

function updateDeliverable(id) {
    var id_Deliverable = $("#id_Deliverable" + id).val();
    var nombre_deliverable = $("#nombre_deliverable" + id).val();
    var criterio_aceptacion_deliverable = $("#criterio_aceptacion_deliverable" + id).val();
    var estado_deliverable = $("#estado_deliverable" + id).val();

    $.ajax({
        url: "Logic/Scripts/Deliverable/updateDeliverable.php",
        type: "POST",
        data: {
            id: id_Deliverable,
            nombre_deliverable: nombre_deliverable,
            criterio_aceptacion_deliverable: criterio_aceptacion_deliverable,
            id_proyecto : localStorage.proyecto,
            estado_deliverable: estado_deliverable
        },
        dataType: "html",
        success: function (data) {
            if (data == "do_it") {
                var modal = '<div class="modal fade bs-example-modal-sm deliverableUpdate" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Entregable Actualizado
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" onclick="javascript:window.location.reload(true);">cerrar</button>
                        </div>` +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $("body").append(modal);
                $(".deliverableUpdate").modal();

            }
        }
    });
    return false;
}