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
            if(data == "do_it"){
                var modal= '<div class="modal fade bs-example-modal-sm requirementSave" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
                    '<div class="modal-dialog modal-sm" role="document">'+
                        '<div class="modal-content">'+
                        `<div class="modal-body">
                            Requisito Guardado
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">cerrar</button>
                        </div>`+
                        '</div>'+
                    '</div>'+
                '</div>';
                $("body").append(modal);
                $(".requirementSave").modal();
            }
                $("#nombre_req").val("");
                $("#criterio_acept_req").val("");
                $("#descripcion_req").val("");
                $("#metrica_acept_req").val("");
                $("#prioridad_req").val("");
        }
    });
}