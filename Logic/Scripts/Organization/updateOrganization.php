<?php

include "../../php/conect.php";

foreach ($_POST as $key => $clave) {
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
}

$conection = Conection();

$query = "UPDATE `organizacion` SET `nombre`='$nombre' WHERE id = $id";

mysqli_query($conection, $query);

echo "do_it";