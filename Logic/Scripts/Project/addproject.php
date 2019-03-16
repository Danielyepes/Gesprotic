<?php

include "../../php/conect.php";

foreach ($_POST as $key => $clave) {
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
}

$conection = Conection();

$query = "INSERT INTO `proyecto`( `titulo`, `id_organizacion`,`id_responsable`)
        VALUES ('$titulo',
        '$id_organizacion',
        '$id_responsable')";

mysqli_query($conection, $query);

echo "do_it";
