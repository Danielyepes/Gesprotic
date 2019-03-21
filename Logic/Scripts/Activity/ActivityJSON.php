<?php

include "../../php/conect.php";

$link = Conection();
$id_proyecto = $_POST["id_proyecto"];
$array = array();

$sql = "SELECT * FROM actividad  WHERE id_proyecto = $id_proyecto";
$result = mysqli_query($link, $sql) or die(mysqli_error($link));
while ($field = mysqli_fetch_array($result)) {
    $id = $field["id"];
    $nombre = $field["nombre"];
    $descripcion = $field["descripcion"];
    $array[] = array(
        'id' => $id,
        'nombre' => $nombre,
        'descripcion' => $descripcion,

    );
}
$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
