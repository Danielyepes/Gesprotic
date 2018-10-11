function sendDeliverable() {
    var nombre_deliverable = $("#nombre_deliverable").val();
    var descripcion_deliverable = $("#descripcion_deliverable").val();
    var hitos_deliverable = $("#hitos_deliverable").val();
    var estado_deliverable = $("#estado_deliverable").val();

    $.ajax({
        url: "Logic/Scripts/Deliverale/addDeliverable.php",
        type: "POST",
        data: {
            nombre_deliverable: nombre_deliverable,
            descripcion_deliverable: descripcion_deliverable,
            hitos_deliverable: hitos_deliverable,
            estado_deliverable: estado_deliverable
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
            $("#nombre_deliverable").val("");
            $("#descripcion_deliverable").val("");
            $("#hitos_deliverable").val("");
            $("#prioridad_req").val("");
            // deliverableList();
        }
    });
}

// function deliverableList() {
//     $.ajax({
//         url: "Logic/Scripts/RequirementJSON.php",
//         type: "POST",
//         dataType: "json",
//         success: function (data) {
//             var response = "";
//             var options = "";

//             for (var i in data) {
//                 response +=
//                     "<tr>" +
//                     "<td>" +
//                     data[i].nombre +
//                     "</td>" +
//                     "<td>" +
//                     data[i].criterio_aceptacion +
//                     "</td>" +
//                     "<td>" +
//                     data[i].metrica +
//                     "</td>" +
//                     "<td>" +
//                     data[i].prioridad +
//                     "</td>" +
//                     '<td> <button class="btn btn-primary" onclick="edit(' +
//                     data[i].id +
//                     ')"><i class="fa fa-eye"></i></button>' +
//                     ' <button class="btn btn-danger" data-toggle="modal" data-target="#confirm-delete" data-href="Logic/Scripts/deleteRequirement.php?id=' + data[i].id + '"><i class="fa fa-close"></i></button>' +
//                     "</td>" +
//                     "</tr>";
//                 options += '<option value="' + data[i].id + '">' + data[i].nombre + '</option>';
//             }
//             if (response == "") {
//                 response = '<tr><td colspan="5"><strong>No hay requisitos agregados</strong></td></tr>';
//             }
//             $("#requirementSelect").html(options);
//             $("#requirements").html(response);
//         }
//     });
// }