<?php

include "../../php/conect.php";

foreach ($_POST as $key => $clave) {
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
}

$conection = Conection();

$query = "UPDATE `entregable` SET `nombre`='$nombre_deliverable', `criterio_aceptacion`='$criterio_aceptacion_deliverable', `estado`='$estado_deliverable' WHERE id = $id";

mysqli_query($conection, $query);

echo "do_it";
