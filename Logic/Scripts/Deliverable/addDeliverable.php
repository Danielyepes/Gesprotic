<?php

include "../../php/conect.php";

foreach ($_POST as $key => $clave) {
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
}

$conection = Conection();

$query = "INSERT INTO `entregable`( `nombre`, `criterio_aceptacion`, `estado`)
        VALUES ('$nombre_entregable',
        '$criterio_entregable',
        'En_proceso')";

mysqli_query($conection, $query);

echo "do_it";