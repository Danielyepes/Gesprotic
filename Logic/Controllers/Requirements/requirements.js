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
                var modal = '<div class="modal fade bs-example-modal-sm requirementSave" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Requisito Guardado
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">cerrar</button>
                        </div>` +
                    '</div>' +
                    '</div>' +
                    '</div>';
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

            for (var i in data) {
                response += '<tr>' +
                    '<td>' + data[i].nombre +
                    '</td>' +
                    '<td>' + data[i].criterio_aceptacion +
                    '</td>' +
                    '<td>' + data[i].metrica +
                    '</td>' +
                    '<td>' + data[i].prioridad +
                    '</td>' +
                    '<td> <button class="btn btn-primary" onclick="edit('+data[i].id+')"><i class="fa fa-eye"></i></button>' +
                    ' <button class="btn btn-danger"><i class="fa fa-close"></i></button>' +
                    '</td>' +
                    '</tr>';
            }
            if (response == "") {
                response = '<tr><td colspan="5"><strong>No hay requisitos agregados</strong></td></tr>';
            }
            $("#requirements").html(response)
        }
    });
}

function edit(id) {
    var modalEdit = `<div class="col-sm-8">
                        <form class="validate-form" method="POST">
                            <h4>
                                <strong>Nombre del Requisito
                                    <span></span>
                                </strong>
                            </h4>
                            <input type="text" class="form-control" name="nombre_req" id="nombre_req" placeholder="Nombre del Requisito"
                                required>
                            <br>
                            <h4>
                                <strong>Descripción del Requisito
                                    <span></span>
                                </strong>
                            </h4>
                            <textarea class="form-control" name="descripcion_req" id="descripcion_req" placeholder="Descripción del Requisito"></textarea required>
                                <br>
                                <h4>
                                    <strong>Criterio de aceptación</strong>
                                </h4>
                                <input type="text" class="form-control" name="criterio_acept_req" id="criterio_acept_req" placeholder="Criterio de aceptación" required>
                                <br>
                                <h4>
                                    <strong>Metrica de aceptación</strong>
                                </h4>
                                <input type="text" class="form-control" name="metrica_acept_req" id="metrica_acept_req" placeholder="Metrica de aceptación" required>
                                <br>
                                <h4>
                                    <strong>Prioridad del Requisito</strong>
                                </h4>
                                <select class="form-control" name="prioridad_req" id="prioridad_req" required>
                                    <option value="" disabled>Seleccione una opción</option>
                                    <option value="Baja">Baja</option>
                                    <option value="Media">Media</option>
                                    <option value="Alta">Alta</option>
                                </select>
                                <br>
                                <button class="btn btn-primary btn-block" type="submit" onsubmit="sendRequirement(e)">
                                    <i class="fa fa-save"> Guardar requisito</i>
                                </button>
                            </form>
                        </div>`;

    $("body").append(modalEdit);

}