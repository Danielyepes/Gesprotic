$(document).ready(function(){
    projectList()
})
function sendProject() {
    var nombre_proyecto = $("#nombre_proyecto").val();
    var organizationproject = $("#organizationproject").val();
    var responsableproject = $("#responsableproject").val();
    $.ajax({
        url: "Logic/Scripts/Project/addproject.php",
        type: "POST",
        data: {
            titulo: nombre_proyecto,
            id_organizacion: organizationproject,
            id_responsable: responsableproject
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
                            Proyecto Guardado
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
            $("#nombre_proyecto").val("");
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
                    data[i].id +
                    "</td>" +
                    "<td>" +
                    data[i].titulo +
                    "</td>" +
                    "<td>" +
                    data[i].id_organizacion +
                    "</td>" +
                    "<td>" +
                    data[i].id_responsable +
                    "</td>" +
                    '<td>'+
                    '<a class="btn btn-success" href="principal.html?id=' + data[i].id + '"><i class="fa fa-eye"></i></a>' +
                    '<button class="btn btn-primary" onclick="editProject(' +
                    data[i].id +
                    ')"><i class="fa fa-pencil"></i></button>'+
                    '<button class="btn btn-danger" data-toggle="modal" data-target="#confirm-delete-project" data-href="Logic/Scripts/Project/deleteProject.php?id=' + data[i].id + '"><i class="fa fa-close"></i></button>' +
                    "</td>" +
                    "</tr>";
            }
            if (response == "") {
                response = '<tr><td colspan="5"><strong>No hay Proyectos agregados</strong></td></tr>';
            }
            $("#project_list").html(response);
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
                            <h4 class="modal-title">Editar Proyecto</h4>
                        </div>
                        <div class="modal-body">
                        <div class="row">
                        <div class="col-sm-8">
                        <form class="validate-form1" method="POST" onsubmit="return updateProject(` + id + `)">
                        <input type="hidden" class="form-control" name="id_Project` + id + `" id="id_Project` + id + `" value="` + id + `">
                            <h4>
                                <strong>Nombre del proyecto
                                    <span></span>
                                </strong>
                            </h4>
                            <input type="text" class="form-control" name="nombre_Project` + id + `" id="nombre_Project` + id + `" placeholder="Nombre del proyecto"
                               value="` + data[0].titulo + `" required>
                            <br>
                            <h4>
                                <strong>Organización
                                    <span></span>
                                </strong>
                            </h4>
                            <input disabled type="text" class="form-control" name="Orgnizacion` + id + `" id="Orgnizacion` + id + `" placeholder="Organización"
                               value="` + data[0].id_organizacion + `" required>
                                <br>
                                <button class="btn btn-primary btn-block" type="submit" id="updateProject" onsubmit="return updateProject(` + id + `)">
                                    <i class="fa fa-save"> Actualizar proyecto</i>
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

    $.ajax({
        url: "Logic/Scripts/Project/updateProject.php",
        type: "POST",
        data: {
            id: id_Project,
            nombre_Project: nombre_Project
        },
        dataType: "html",
        success: function (data) {
            if (data == "do_it") {
                var modal = '<div class="modal fade bs-example-modal-sm ProjectUpdate" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Proyecto Actualizado
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