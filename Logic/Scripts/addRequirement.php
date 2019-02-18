<?php

include "../php/conect.php";

foreach ($_POST as $key => $clave) {
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
}

$conection = Conection();

    $query = "INSERT INTO `requisito`(`nombre`, `criterio_aceptacion`, `descripcion`, `metrica`, `prioridad`,`id_proyecto`)
        VALUES ('$nombre_req',
        '$criterio_acept_req',
        '$descripcion_req',
        '$metrica_acept_req',
        '$prioridad_req',
        $id_proyecto)";

    mysqli_query($conection, $query);

    echo "do_it";
