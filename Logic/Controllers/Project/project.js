$(document).ready(function(){
    projectList()
})
function sendProject() {
    var nombre_entregable = $("#nombre_entregable").val();
    var criterio_entregable = $("#criterio_entregable").val();
    $.ajax({
        url: "Logic/Scripts/Project/addproject.php",
        type: "POST",
        data: {
            nombre_entregable: nombre_entregable,
            criterio_entregable: criterio_entregable
        },
        dataType: "html",
        success: function (data) {
            console.log(data)
            if (data == "do_it") {
                var modal =
                    '<div class="modal fade bs-example-modal-sm project" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
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
                $(".project").modal();
            }
            $("#nombre_entregable").val("");
            $("#criterio_entregable").val("");
            projectList();
        }
    });
}

function projectList() {
    $.ajax({
        url: "Logic/Scripts/Project/ProjectJSON.php",
        type: "POST",
        dataType: "json",
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
                    '<td> <button class="btn btn-primary" onclick="editProject(' +
                    data[i].id +
                    ')"><i class="fa fa-eye"></i></button>' +
                    ' <button class="btn btn-danger" data-toggle="modal" data-target="#confirm-delete" data-href="Logic/Scripts/deleteRequirement.php?id=' + data[i].id + '"><i class="fa fa-close"></i></button>' +
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

function editProject(id) {
    $.ajax({
        url: "Logic/Scripts/Project/getProject.php",
        type: "POST",
        dataType: "json",
        data: {
            id: id
        },
        success: function (data) {
            var modalEdit = "";
            modalEdit += `<div class="modal fade" id="modalEditProject` + id + `" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">Editar Entregable</h4>
                        </div>
                        <div class="modal-body">
                        <div class="row">
                        <div class="col-sm-8">
                        <form class="validate-form1" method="POST" onsubmit="return updateProject(` + id + `)">
                        <input type="hidden" class="form-control" name="id_Project` + id + `" id="id_Project` + id + `" value="` + id + `">
                            <h4>
                                <strong>Nombre del Entregable
                                    <span></span>
                                </strong>
                            </h4>
                            <input type="text" class="form-control" name="nombre_Project` + id + `" id="nombre_Project` + id + `" placeholder="Nombre del Entregable"
                               value="` + data[0].nombre + `" required>
                            <br>
                            <h4>
                                <strong>Descripción del Entregable
                                    <span></span>
                                </strong>
                            </h4>
                            <textarea class="form-control" name="criterio_aceptacion_Project` + id + `" id="criterio_aceptacion_Project` + id + `" placeholder="Descripción del Requisito" required>` + data[0].criterio_aceptacion + `</textarea>
                                <br>
                                <select class="form-control" name="estado_Project` + id + `" id="estado_Project` + id + `" required>`;
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
                                <button class="btn btn-primary btn-block" type="submit" id="updateProject" onsubmit="return updateProject(` + id + `)">
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
            $("#modalEditProject" + id).modal("show");
        }
    });
}

function updateProject(id) {
    var id_Project = $("#id_Project" + id).val();
    var nombre_Project = $("#nombre_Project" + id).val();
    var criterio_aceptacion_Project = $("#criterio_aceptacion_Project" + id).val();
    var estado_Project = $("#estado_Project" + id).val();

    $.ajax({
        url: "Logic/Scripts/Project/updateProject.php",
        type: "POST",
        data: {
            id: id_Project,
            nombre_Project: nombre_Project,
            criterio_aceptacion_Project: criterio_aceptacion_Project,
            estado_Project: estado_Project
        },
        dataType: "html",
        success: function (data) {
            if (data == "do_it") {
                var modal = '<div class="modal fade bs-example-modal-sm ProjectUpdate" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
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
                $(".ProjectUpdate").modal();

            }
        }
    });
    return false;
}