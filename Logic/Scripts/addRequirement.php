<?php

include "../php/conect.php";

foreach ($_POST as $key => $clave) {
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
}

$conection = Conection();
if (isset($nombre_req)) {
    $query = "INSERT INTO `requisito`(`nombre`, `criterio_aceptacion`, `descripcion`, `metrica`, `prioridad`)
        VALUES ('$nombre_req',
        '$criterio_acept_req',
        '$descripcion_req',
        '$metrica_acept_req',
        '$prioridad_req')";

    mysqli_query($conection, $query);

    echo "do_it";
}
