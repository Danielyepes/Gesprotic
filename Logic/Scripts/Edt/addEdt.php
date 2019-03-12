<?php

include "../../php/conect.php";


foreach ($_POST as $key => $clave) {
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
}

$conection = Conection();

$query = "INSERT INTO `edt`( `nombre`,`edt`) VALUES ('$nombre_edt','$edt')";

mysqli_query($conection, $query);

$sql = "SELECT * FROM edt ORDER BY id desc";
$result = mysqli_query($conection, $sql) or die(mysqli_error($conection));
$field = mysqli_fetch_array($result);

$id_edt = $field["id"];

$query = "INSERT INTO `alcance_edt`( `id_edt`,`id_alcance`) VALUES ('$id_edt','$id_alcance')";

mysqli_query($conection, $query);

echo "do_it";

