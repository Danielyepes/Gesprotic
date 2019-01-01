<?php

include "../../php/conect.php";

foreach ($_POST as $key => $clave) {
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
}

$conection = Conection();

    $query = "INSERT INTO `actividad`( `nombre`, `descripcion`, `estado`, `duracion_estimada`, `fecha_inicio`, `fecha_fin`)
        VALUES ('$nombre_actividad',
        '$descripcion_actividad',
        '',
        '$duracion_actividad',
        '$fecha_inicio_actividad',
        '$fecha_fin_actividad'
        )";

    mysqli_query($conection, $query);

    echo "do_it";
