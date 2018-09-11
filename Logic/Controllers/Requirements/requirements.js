function sendRequirement(e) {
    e.preventDefault();

    var nombre_req = $("#nombre_req").val();
    var criterio_acept_req = $("#criterio_acept_req").val();
    var descripcion_req = $("#descripcion_req").val();
    var metrica_acept_req = $("#metrica_acept_req").val();
    var prioridad_req = $("#prioridad_req").val();

    $.ajax({
        url: "Logic/Scripts/addRequirement.php",
        type: "GET",
        data: {
        nombre_req: nombre_req,
        criterio_acept_req: criterio_acept_req,
        descripcion_req: descripcion_req,
        metrica_acept_req: metrica_acept_req,
        prioridad_req: prioridad_req
        },
        dataType: "html",
        success: function (data) {
            console.log(data);
        }
    });
}