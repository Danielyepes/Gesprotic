$(document).ready(function(){
    organizationList()
})
function sendOrganization() {
    var nombre_organizacion = $("#nombre_organizacion").val();
    $.ajax({
        url: "Logic/Scripts/Organization/addorganization.php",
        type: "POST",
        data: {
            nombre: nombre_organizacion
        },
        dataType: "html",
        success: function (data) {
            console.log(data)
            if (data == "do_it") {
                var modal =
                    '<div class="modal fade bs-example-modal-sm organization" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Organización Guardada
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">cerrar</button>
                        </div>` +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $("body").append(modal);
                $(".organization").modal();
            }
            $("#nombre_organizacion").val("");
            $("#criterio_organizacion").val("");
            organizationList();
        }
    });
}

function organizationList() {
    $.ajax({
        url: "Logic/Scripts/Organization/OrganizationJSON.php",
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
                    data[i].nombre +
                    "</td>" +
                    '<td> <button class="btn btn-primary" onclick="editOrganization(' +
                    data[i].id +
                    ')"><i class="fa fa-eye"></i></button>' +
                    ' <button class="btn btn-danger" data-toggle="modal" data-target="#confirm-delete" data-href="Logic/Scripts/deleteRequirement.php?id=' + data[i].id + '"><i class="fa fa-close"></i></button>' +
                    "</td>" +
                    "</tr>";
            }
            if (response == "") {
                response = '<tr><td colspan="5"><strong>No hay organizaciones agregadas</strong></td></tr>';
            }
            $("#organization_list").html(response);
        }
    });
}

function editOrganization(id) {
    $.ajax({
        url: "Logic/Scripts/Organization/getOrganization.php",
        type: "POST",
        dataType: "json",
        data: {
            id: id
        },
        success: function (data) {
            var modalEdit = "";
            modalEdit += `<div class="modal fade" id="modalEditOrganization` + id + `" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">Editar Organizacion</h4>
                        </div>
                        <div class="modal-body">
                        <div class="row">
                        <div class="col-sm-8">
                        <form class="validate-form1" method="POST" onsubmit="return updateOrganization(` + id + `)">
                        <input type="hidden" class="form-control" name="id_Organization` + id + `" id="id_Organization` + id + `" value="` + id + `">
                            <h4>
                                <strong>Nombre de la organización
                                    <span></span>
                                </strong>
                            </h4>
                            <input type="text" class="form-control" name="nombre_Organization` + id + `" id="nombre_Organization` + id + `" placeholder="Nombre del Entregable"
                               value="` + data[0].nombre + `" required>
                            <br>
                                <button class="btn btn-primary btn-block" type="submit" id="updateOrganization" onsubmit="return updateOrganization(` + id + `)">
                                    <i class="fa fa-save"> Actualizar organización</i>
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
            $("#modalEditOrganization" + id).modal("show");
        }
    });
}

function updateOrganization(id) {
    var id_Organization = $("#id_Organization" + id).val();
    var nombre_Organization = $("#nombre_Organization" + id).val();
    var criterio_aceptacion_Organization = $("#criterio_aceptacion_Organization" + id).val();
    var estado_Organization = $("#estado_Organization" + id).val();

    $.ajax({
        url: "Logic/Scripts/Organization/updateOrganization.php",
        type: "POST",
        data: {
            id: id_Organization,
            nombre_Organization: nombre_Organization,
            criterio_aceptacion_Organization: criterio_aceptacion_Organization,
            estado_Organization: estado_Organization
        },
        dataType: "html",
        success: function (data) {
            if (data == "do_it") {
                var modal = '<div class="modal fade bs-example-modal-sm OrganizationUpdate" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Organización Actualizada
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" onclick="javascript:window.location.reload(true);">cerrar</button>
                        </div>` +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $("body").append(modal);
                $(".OrganizationUpdate").modal();

            }
        }
    });
    return false;
}