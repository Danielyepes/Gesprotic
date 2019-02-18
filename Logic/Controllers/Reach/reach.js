function sendReach() {
    var descripcion_alcance = $("#descripcion_alcance").val();
    var limitaciones = $("#limitaciones").val();
    var hipotesis = $("#hipotesis").val();
    var descripcion_alcance = $("#descripcion_alcance").val();
    var reachSelect = $("#requirementSelect").val();
    
    $.ajax({
        url: "Logic/Scripts/Reach/addReach.php",
        type: "POST",
        data: {
            descripcion_alcance: descripcion_alcance,
            hipotesis: hipotesis,
            id_proyecto: localStorage.proyecto,
            limitaciones: limitaciones
        },
        dataType: "html",
        success: function (data) {
            console.log(data)
            if (data == "do_it") {
                var modal =
                    '<div class="modal fade bs-example-modal-sm reachSave" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Alcance Guardado
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">cerrar</button>
                        </div>` +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $("body").append(modal);
                $(".reachSave").modal();
            }
            reachList();
        }
    });
}
function reachList(){

}