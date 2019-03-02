<?php

include "../../php/conect.php";

foreach ($_POST as $key => $clave) {
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
}

$conection = Conection();

$query = "UPDATE `proyecto` SET `titulo`='$titulo', `id_organizacion`='$id_organizacion' WHERE id = $id";

mysqli_query($conection, $query);

echo "do_it";
