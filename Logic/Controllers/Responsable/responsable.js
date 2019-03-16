$(document).ready(function () {
    responsableList()
})

function sendResponsable() {
    console.log("in")
    var nombre_responsable = $("#nombre_responsable").val();
    $.ajax({
        url: "Logic/Scripts/Responsable/addResponsable.php",
        type: "POST",
        data: {
            nombre: nombre_responsable
        },
        dataType: "html",
        success: function (data) {
            
            if (data == "do_it") {
                var modal =
                    '<div class="modal fade bs-example-modal-sm responsable" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Responsable Guardado
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">cerrar</button>
                        </div>` +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $("body").append(modal);
                $(".responsable").modal();
            }
            $("#nombre_responsable").val("");
            responsableList();
        },
        error: function (data) {
            
        }
    });
}

function responsableList() {
    $.ajax({
        url: "Logic/Scripts/Responsable/ResponsableJSON.php",
        type: "POST",
        dataType: "json",
        success: function (data) {
            
            var response = "";
            var response1 = "";

            for (var i in data) {
                response +=
                    "<tr>" +
                    "<td>" +
                    data[i].id +
                    "</td>" +
                    "<td>" +
                    data[i].nombre +
                    "</td>" +
                    '<td> <button class="btn btn-primary" onclick="editResponsable(' +
                    data[i].id +
                    ')"><i class="fa fa-pencil"></i></button>'+
                    ' <button class="btn btn-danger" data-toggle="modal" data-target="#confirm-delete-responsable" data-href="Logic/Scripts/Responsable/deleteResponsable.php?id=' + data[i].id + '"><i class="fa fa-close"></i></button>' +
                    "</td>" +
                    "</tr>";
                    response1 +=
                    "<option value='" +
                    data[i].id +
                    "'>" +
                    data[i].nombre +
                    "</option>";
            }
            if (response == "") {
                response = '<tr><td colspan="5"><strong>No hay responsables agregados</strong></td></tr>';
            }
            $("#responsable_list").html(response);
            $("#responsableproject").html(response1);
        }
    });
}

function editResponsable(id) {
    $.ajax({
        url: "Logic/Scripts/Responsable/getResponsable.php",
        type: "POST",
        dataType: "json",
        data: {
            id: id
        },
        success: function (data) {
            
            var modalEdit = "";
            modalEdit += `<div class="modal fade" id="modalEditResponsable` + id + `" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">Editar Responsable</h4>
                        </div>
                        <div class="modal-body">
                        <div class="row">
                        <div class="col-sm-8">
                        <form id="validate-form1" method="POST" onsubmit="return updateResponsable(` + id + `)">
                        <input type="hidden" class="form-control" name="id_Responsable` + id + `" id="id_Responsable` + id + `" value="` + id + `">
                            <h4>
                                <strong>Nombre del responsable
                                    <span></span>
                                </strong>
                            </h4>
                            <input type="text" class="form-control" name="nombre_Responsable` + id + `" id="nombre_Responsable` + id + `" placeholder="Nombre del Entregable"
                            value="` + data[0].nombre + `" required>
                            <br>
                                <button class="btn btn-primary btn-block" type="submit" onsubmit="return updateResponsable(` + id + `)">
                                    <i class="fa fa-save"> Actualizar responsable</i>
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
            $("#modalEditResponsable" + id).modal("show");
        }
    });
}

function updateResponsable(id) {
    var id_Responsable = $("#id_Responsable" + id).val();
    var nombre_Responsable = $("#nombre_Responsable" + id).val();

    $.ajax({
        url: "Logic/Scripts/Responsable/updateResponsable.php",
        type: "POST",
        data: {
            id: id_Responsable,
            nombre: nombre_Responsable,
        },
        dataType: "html",
        success: function (data) {
            if (data == "do_it") {
                var modal = '<div class="modal fade bs-example-modal-sm ResponsableUpdate" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Responsable Actualizado
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" onclick="javascript:window.location.reload(true);">cerrar</button>
                        </div>` +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $("body").append(modal);
                $(".ResponsableUpdate").modal();

            }
        }
    });
    return false;
}