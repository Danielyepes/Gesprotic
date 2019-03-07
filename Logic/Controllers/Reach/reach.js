reachList();

function sendReach() {
    var descripcion_alcance = $("#descripcion_alcance").val();
    var limitaciones = $("#limitaciones").val();
    var hipotesis = $("#hipotesis").val();
    var descripcion_alcance = $("#descripcion_alcance").val();
    var id = $("#id_reach").val();
    var reachSelect = $("#requirementSelect").val();

    $.ajax({
        url: "Logic/Scripts/Reach/addReach.php",
        type: "POST",
        data: {
            id: id,
            descripcion_alcance: descripcion_alcance,
            reachSelect: reachSelect,
            hipotesis: hipotesis,
            id_proyecto: localStorage.proyecto,
            limitaciones: limitaciones
        },
        dataType: "html",
        success: function (data) {
            console.log(data)
            if (data == "do_it") {
                var modal =
                    '<div class="modal fade bs-example-modal-sm" id="reachSave" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">' +
                    '<div class="modal-dialog modal-sm" role="document">' +
                    '<div class="modal-content">' +
                    `<div class="modal-body">
                            Alcance Guardado
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal" onclick="reload()">cerrar</button>
                        </div>` +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $("body").append(modal);
                $("#reachSave").modal();

                
            }
            // document.getElementById("scope_form").reset();
            reachList();
        }
    });
}

function reachList() {

    $.ajax({
        url: "Logic/Scripts/Reach/getReachreq.php",
        type: "POST",
        data: {
            id_proyecto: localStorage.proyecto
        },
        dataType: "json",
        success: function (data) {
            

            $("#descripcion_alcance").val(data[0].descripcion);
            $("#limitaciones").val(data[0].limitaciones);
            $("#hipotesis").val(data[0].hipotesis);
            $("#id_reach").val(data[0].id_reach);

            var ultimo = data.length;
            var opciones = "";
            for (var i in data[ultimo - 1].array) {
                opciones += ("<li>" + data[ultimo - 1].array[i].nombre + "</li>");
            }

            if (opciones.length > 0) {
                $("#requirementExcludeDiv").css("display", "block")
            }
            $("#requirementExclude").html(opciones)

        },
        error: function (data) {
            console.log(data);
        }
    });

}

function reload(){
    setTimeout( ()=> {
        location.reload();
    },
    100)
}