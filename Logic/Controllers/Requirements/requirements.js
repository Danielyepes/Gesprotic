function sendRequirement() {
    var nombre_req = $("#nombre_req").val();
    var criterio_acept_req = $("#criterio_acept_req").val();
    var descripcion_req = $("#descripcion_req").val();
    var metrica_acept_req = $("#metrica_acept_req").val();
    var prioridad_req = $("#prioridad_req").val();

    $.ajax({
        url: "Logic/Scripts/addRequirement.php",
        type: "POST",
        data: {
            nombre_req: nombre_req,
            criterio_acept_req: criterio_acept_req,
            descripcion_req: descripcion_req,
            metrica_acept_req: metrica_acept_req,
            prioridad_req: prioridad_req
        },
        dataType: "html",
        success: function (data) {
            if (data == "do_it") {
                var modal =
                    '<div class="modal fade bs-example-modal-sm requirementSave" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Requisito Guardado
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">cerrar</button>
                        </div>` +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $("body").append(modal);
                $(".requirementSave").modal();
            }
            $("#nombre_req").val("");
            $("#criterio_acept_req").val("");
            $("#descripcion_req").val("");
            $("#metrica_acept_req").val("");
            $("#prioridad_req").val("");
            requirementList();
        }
    });
}

function requirementList() {
    $.ajax({
        url: "Logic/Scripts/RequirementJSON.php",
        type: "POST",
        dataType: "json",
        success: function (data) {
            var response = "";
            var options = "";

            for (var i in data) {
                response +=
                    "<tr>" +
                    "<td>" +
                    data[i].nombre +
                    "</td>" +
                    "<td>" +
                    data[i].criterio_aceptacion +
                    "</td>" +
                    "<td>" +
                    data[i].metrica +
                    "</td>" +
                    "<td>" +
                    data[i].prioridad +
                    "</td>" +
                    '<td> <button class="btn btn-primary" onclick="edit(' +
                    data[i].id +
                    ')"><i class="fa fa-pencil"></i></button>'+
                    ' <button class="btn btn-danger" data-toggle="modal" data-target="#confirm-delete" data-href="Logic/Scripts/deleteRequirement.php?id='+data[i].id+'"><i class="fa fa-close"></i></button>' +
                    "</td>" +
                    "</tr>";
                    options += '<option value="'+data[i].id+'">'+data[i].nombre+'</option>';
            }
            if (response == "") {
                response = '<tr><td colspan="5"><strong>No hay requisitos agregados</strong></td></tr>';
            }
            $("#requirementSelect").html(options);
            $("#requirements").html(response);
        }
    });
}

function edit(id) {
    $.ajax({
        url: "Logic/Scripts/getRequirement.php",
        type: "POST",
        dataType: "json",
        data: {
            id: id
        },
        success: function (data) {
            var modalEdit = "";
            modalEdit += `<div class="modal fade" id="modalEditReq` + id + `" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">Editar Requisito</h4>
                        </div>
                        <div class="modal-body">
                        <div class="row">
                        <div class="col-sm-8">
                        <form class="validate-form1" method="POST" onsubmit="return updateReq(`+id+`)">
                        <input type="hidden" class="form-control" name="id_req` + id + `" id="id_req` + id + `" value="` + id + `">
                            <h4>
                                <strong>Nombre del Requisito
                                    <span></span>
                                </strong>
                            </h4>
                            <input type="text" class="form-control" name="nombre_req` + id + `" id="nombre_req` + id + `" placeholder="Nombre del Requisito"
                               value="` + data[0].nombre + `" required>
                            <br>
                            <h4>
                                <strong>Descripción del Requisito
                                    <span></span>
                                </strong>
                            </h4>
                            <textarea class="form-control" name="descripcion_req` + id + `" id="descripcion_req` + id + `" placeholder="Descripción del Requisito" required>` + data[0].descripcion + `</textarea>
                                <br>
                                <h4>
                                    <strong>Criterio de aceptación</strong>
                                </h4>
                                <input type="text" class="form-control" name="criterio_acept_req` + id + `" id="criterio_acept_req` + id + `" placeholder="Criterio de aceptación" value="` + data[0].criterio_aceptacion + `" required>
                                <br>
                                <h4>
                                    <strong>Metrica de aceptación</strong>
                                </h4>
                                <input type="text" class="form-control" name="metrica_acept_req` + id + `" id="metrica_acept_req` + id + `" placeholder="Metrica de aceptación" value="` + data[0].metrica + `" required>
                                <br>
                                <h4>
                                    <strong>Prioridad del Requisito</strong>
                                </h4>
                                <select class="form-control" name="prioridad_req` + id + `" id="prioridad_req` + id + `" required>`;
            if (data[0].prioridad == "Baja") {
                modalEdit += '<option value="Baja" selected>Baja</option>' +
                    '<option value="Media">Media</option>' +
                    '<option value="Alta">Alta</option>';
            } else if (data[0].prioridad == "Media") {
                modalEdit += ' <option value="Baja">Baja</option>' +
                    '<option value="Media" selected>Media</option>' +
                    '<option value="Alta">Alta</option>';
            } else if (data[0].prioridad == "Alta") {
                modalEdit += '<option value="Baja">Baja</option>' +
                    '<option value="Media">Media</option>' +
                    '<option value="Alta" selected>Alta</option>';
            }
            modalEdit += `</select>
                                <br>
                                <button class="btn btn-primary btn-block" type="submit" id="updatereq" onsubmit="return updateReq(` + id + `)">
                                    <i class="fa fa-save"> Actualizar requisito</i>
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
            $("#modalEditReq" + id).modal("show");
        }
    });
}

function updateReq(id) {
    var id_req = $("#id_req" + id).val();
    var nombre_req = $("#nombre_req"+ id).val();
    var criterio_acept_req = $("#criterio_acept_req"+ id).val();
    var descripcion_req = $("#descripcion_req"+ id).val();
    var metrica_acept_req = $("#metrica_acept_req"+ id).val();
    var prioridad_req = $("#prioridad_req"+ id).val();

    $.ajax({
        url: "Logic/Scripts/updateRequirement.php",
        type: "POST",
        data: {
            id: id_req,
            nombre_req: nombre_req,
            criterio_acept_req: criterio_acept_req,
            descripcion_req: descripcion_req,
            metrica_acept_req: metrica_acept_req,
            prioridad_req: prioridad_req
        },
        dataType: "html",
        success: function (data) {
            if (data == "do_it") {
                var modal = '<div class="modal fade bs-example-modal-sm requirementUpdate" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Requisito Actualizado
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" onclick="javascript:window.location.reload(true);">cerrar</button>
                        </div>` +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $("body").append(modal);
                $(".requirementUpdate").modal();
                
            }
        }
    });
    return false;
}