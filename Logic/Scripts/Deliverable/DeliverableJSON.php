<?php

include "../../php/conect.php";

$link = Conection();
$array = array();

$sql = "SELECT * FROM entregable";
$result = mysqli_query($link, $sql) or die(mysqli_error($link));
while ($field = mysqli_fetch_array($result)) {
    $id = $field["id"];
    $nombre = $field["nombre"];
    $criterio_aceptacion = $field["criterio_aceptacion"];
    $estado = $field["estado"];
    $array[] = array(
        'id' => $id,
        'nombre' => $nombre,
        'criterio_aceptacion' => $criterio_aceptacion,
        'estado' => $estado
    );
}
$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
