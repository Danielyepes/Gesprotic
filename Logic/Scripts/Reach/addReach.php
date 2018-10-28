<?php

include "../../php/conect.php";

foreach ($_POST as $key => $clave) {
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
}

$conection = Conection();

$query = "INSERT INTO `alcance`(`descripcion`, `edt`, `limitaciones`, `hipotesis`)
        VALUES ('$descripcion_alcance',
        '',
        '$limitaciones',
        '$hipotesis')";

mysqli_query($conection, $query);

echo "do_it";
