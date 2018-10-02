<?php

include "../php/conect.php";

foreach ($_POST as $key => $clave) {
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
}

$conection = Conection();

$query = "UPDATE `requisito` SET `nombre`='$nombre_req', `criterio_aceptacion`='$criterio_acept_req', `descripcion`='$descripcion_req', `metrica`='$metrica_acept_req', `prioridad`='$prioridad_req' WHERE id = $id";

mysqli_query($conection, $query);

echo "do_it";
